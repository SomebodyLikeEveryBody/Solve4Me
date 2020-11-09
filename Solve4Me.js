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

function getGivenStr(pStr) {
    let givenStr = pStr.match(/given:[ ]*\n(.|\n)*?\nend/gmi)
    if (givenStr !== null) {
        return givenStr[0];
    }

    return ('');
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

function getInputStr() {
    return $('textarea#input').val();
}

function displayLabelToOutputScreen(pStr, pType) {
    let appened_element = $('<div class="' + pType + '"></div>');
    
    appened_element.append($(pStr));
    appened_element.hide(0);

    $('section#output').append(appened_element);
    appened_element.animate({width: 'toggle'}, 200);
}

function displayLabelToOutputScreen2(pStr, pType) {
    let appened_element = $('<div class="' + pType + '"></div>');
    
    appened_element.append($(pStr));
    appened_element.hide(0);

    $('section#output div.end_label').before(appened_element);
    appened_element.animate({width: 'toggle'}, 200);
}


function updateScreen2() {

    let givenLines = getAllGivenLines(getInputStr())
    let labelDivsInOutputScreen = $('section#output div.formula, section#output div.jump_line');
    
    /* if there's no given mention, we simply clear the output screen */
    if (givenLines.length === 0) {
        labelDivsInOutputScreen.animate({width: 'toggle'}, 200, () => {
            $('section#output').html('');
        });
    } else {
        /* display " given" and "end" labels */
        if ($('section#output div.given_label').length == 0) {
            displayLabelToOutputScreen(texToMathML(translateS4MtoTex('given:', g_dictReplace)), 'label step given_label');
            displayLabelToOutputScreen(texToMathML(translateS4MtoTex('end', g_dictReplace)), 'label step end_label');
        }
        
        let count = 1;
        let tempClass = '';
        let tempContent = '';
        for (const givenLineIndex in givenLines) {
            /* if there is not the corresponding div, we create it  */
            tempClass = getClassOfLabel(translateS4MtoTex(givenLines[givenLineIndex], g_dictReplace));
            tempContent = texToMathML(translateS4MtoTex(givenLines[givenLineIndex], g_dictReplace)).outerHTML;
            if (labelDivsInOutputScreen[givenLineIndex] === undefined) {
                if (tempClass === 'formula') {
                    displayLabelToOutputScreen2('<div class="statement_id">(' + (count++) + '):</div>' + tempContent, 'label ' + tempClass);
                } else {
                    displayLabelToOutputScreen2(texToMathML(translateS4MtoTex(givenLines[givenLineIndex], g_dictReplace)), 'label ' + tempClass);
                }
            } else {
                /* if it exists but it has a different value of the one in input screen*/
                let math_block = labelDivsInOutputScreen[givenLineIndex].querySelector('.ma-block');
                
                if (translateS4MtoTex(givenLines[givenLineIndex], g_dictReplace) !== math_block.getAttribute('alttext')) {
                    $(labelDivsInOutputScreen[givenLineIndex]).animate({width: 'toggle'}, 200, function () {
                        $(math_block).remove();
                        $(labelDivsInOutputScreen[givenLineIndex]).append($(texToMathML(translateS4MtoTex(givenLines[givenLineIndex], g_dictReplace)).outerHTML));
                        $(labelDivsInOutputScreen[givenLineIndex]).animate({width: 'toggle'}, 200);
                    });
                }
            }
        }

        /* we eliminate all excedentary divs in the output screen */
        if (givenLines.length !== labelDivsInOutputScreen.length) {
            let count = givenLines.length;
            while (labelDivsInOutputScreen[count] !== undefined) {
                $(labelDivsInOutputScreen[count]).remove();
                count++;
            }

        }
    }
}

function updateScreen() {

    $('section#output').html('');

    let statements = getAllGivenLines(getInputStr());

    if (statements.length !== 0) {
        /* Display given: label */
        displayLabelToOutputScreen(texToMathML(translateS4MtoTex('given:', g_dictReplace)), 'label step');
        
        /* display each statement */
        let count = 1;
        for (statement of statements) {
            if (statement !== '') {
                statement = texToMathML(translateS4MtoTex(statement, g_dictReplace)).outerHTML
                displayLabelToOutputScreen('<div class="statement_id">(' + (count++) + '):</div>' + statement, 'label formula');
            } else {
                displayLabelToOutputScreen(texToMathML(''), 'jump_line');
            }
        }

        /* display end label */
        displayLabelToOutputScreen(texToMathML(translateS4MtoTex('end', g_dictReplace)), 'label step');

    } else {
        //rien
    }
}

/*
 * MAIN
 * */
$(function () {

    let outputScreenContent = new OutputScreenContent();
    $('textarea#input').focus();
    updateScreen2();

    $('textarea#input').keydown((e) => {
        let currentInputScreenContent = getInputStr();
        if (e.which === 38
            || e.which == 40
            || e.which == 13) {
                if (outputScreenContent.getValue() !== currentInputScreenContent) {
                    outputScreenContent.setValue(currentInputScreenContent);
                    updateScreen2();
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