function OutputScreenContent() {
    this.value = '';

    this.setValue = function (pValue) {
        this.value = pValue;
    }

    this.getValue = function () {
        return (this.value);
    }

    this.isSameValueAs = function (pValue) {
        return (pValue === this.value);
    }
}


/*
 * textToMathML():
 * Takes a string and return a <math> DOM object corresponding to the expression
 * Uses the M.sToMathE() function in jqmath.js
 * */
function texToMathML(pTexStr) {
    return (M.sToMathE(pTexStr, true));
}

function getAllGivenLines(pStr)
{
    let givenStatements = pStr.match(/given:[ ]*\n(.|\n)*?\nend/gmi)
    if (givenStatements !== null) {
        givenStatements = givenStatements[0];
        givenStatements = givenStatements.replace(/given:[ ]*\n/mi, '');
        givenStatements = givenStatements.replace(/\nend/, '');
        givenStatements = givenStatements.split('\n');
    } else {
        givenStatements = [];
    }

    return givenStatements;
}

function getAllStatements(pStr) {
    let givenLines = getAllGivenLines(pStr);

    return (givenLines.filter((str) => (str != '')));
}

function translateS4MtoTex(pInText, pDictTranslate) {
    let outText = pInText;

	for (const key in pDictTranslate) {
        outText = outText.replace(new RegExp(key, 'g'), pDictTranslate[key]);
	}

	return (outText);
}

function getClassOfLabel(pStatement) {
    let retClass = '';
    switch (pStatement[0]) {
        case '♮':
            retClass = 'step';
            break;
        case undefined:
            retClass = 'jump_line';
            break;
        default:
            retClass = 'formula';
    }

    return retClass;
}

function getAllInputs() {
    return $('textarea#input').val();
}

function displayLabelToOutputScreen(pStr, pType) {
    let appened_element = $('<div class="' + pType + '"></div>');
    
    appened_element.append($(pStr));
    appened_element.hide(0);

    $('section#output').append(appened_element);
    appened_element.animate({width: 'toggle'}, 200);
}

function updateScreen() {

    $('section#output').html('');

    let statements = getAllGivenLines(getAllInputs());
    let appened_element = null;

    if (statements.length !== 0) {
        /* Display given: label */
        displayLabelToOutputScreen(texToMathML(translateS4MtoTex('given:', g_dictReplace)), 'step');

        /* display each statement */
        let count = 1;
        for (statement of statements) {
            if (statement !== '') {
                statement = texToMathML(translateS4MtoTex(statement, g_dictReplace)).outerHTML
                displayLabelToOutputScreen('<span class="statement_id">(' + (count++) + '):</span>' + statement, 'formula');
            } else {
                displayLabelToOutputScreen(texToMathML(''), 'jump_line');
            }
        }

        /* display end label */
        displayLabelToOutputScreen(texToMathML(translateS4MtoTex('end', g_dictReplace)), 'step');

    } else {
        console.log('ya pas de segment given / end');
    }
}

/*
 * MAIN
 * */
$(function () {

    let outputScreenContent = new OutputScreenContent();
    $('textarea#input').focus();

    $('textarea#input').keydown((e) => {

        let currentInputScreenContent = getAllInputs();
        if (e.which === 38
            || e.which == 40
            || e.which == 13) {
                if (outputScreenContent.getValue() !== currentInputScreenContent) {
                    outputScreenContent.setValue(currentInputScreenContent);
                    updateScreen();
                }
        }
    });

    $('button#do_solve').click(() => {
        if ($('textarea#input').val() !== '') {
            $('section#output').html('');

            let statements = getAllGivenLines($('textarea#input').val());

            let appened_element = null;
            for (statement of statements) {
                statement = translateS4MtoTex(statement, g_dictReplace);
                appened_element = $('<div class="' + getClassOfLabel(statement) + '"><span class="statement_id">(1):</span></div>');
                appened_element.append($(texToMathML(statement)));
                appened_element.hide(0);

                $('section#output').append(appened_element);
                appened_element.animate({width: 'toggle'}, 200);
            }
        }
    });

    $('button#looper').focus(() => {
        $('textarea#input').focus();
    })
});