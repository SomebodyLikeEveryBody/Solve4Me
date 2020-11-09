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

function Translater(pDictionnary) {
    this.dictionnary = pDictionnary;

    /*
    * textToMathML():
    * Takes a string in Tex and return a <math> DOM object corresponding to the expression
    * Uses the M.sToMathE() function in jqmath.js
    * */
    this.texToMathML = function (pInText) {
        return (M.sToMathE(pInText, true));
    };

    /*
    * S4MtoTex():
    * Takes a string in S4M language and return a Tex string according to pDictTranslate correspondances
    * */
    this.S4MtoTex = function (pInText) {
        let outText = pInText;

        for (const key in this.dictionnary) {
            outText = outText.replace(new RegExp(key, 'g'), this.dictionnary[key]);
        }
    
        return (outText);
    };

    this.S4MToMathML = function (pInText) {
        return this.texToMathML(this.S4MtoTex(pInText));
    };
}

/*
 * getInputStr():
 * gives the content of textarea#input in raw str
 * */
function getInputStr() {
    return $('textarea#input').val();
}

/*
 * getGivenStr():
 * return the part of #textarea#input that is between given: and end included
 * */
function getGivenStr() {
    let givenStr = getInputStr().match(/given:[ ]*\n(.|\n)*?\nend/gmi)
    if (givenStr !== null) {
        return givenStr[0];
    }

    return ('');
}

/*
 * getAllGivenLines():
 * return an array containg each statement AND each jump line defined in textarea#input in S4M language
 * */
function getAllGivenLines()
{
    let givenStr = getGivenStr();
    let givenStatements = [];

    if (givenStr) {
        givenStatements = givenStr.replace(/given:[ ]*\n/mi, '');
        givenStatements = givenStatements.replace(/\nend/, '');
        givenStatements = givenStatements.split('\n');
    }

    return givenStatements;
}

/*
 * getAllStatements():
 * return an array containg each statement defined in textarea#input in S4M language
 * */
function getAllStatements() {
    let givenLines = getAllGivenLines();

    return (givenLines.filter((str) => (str != '')));
}

/*
 * getClassOfLabel(pStatement):
 * return the class of a div.label according to the first char of its content (pStatement)
 * not very clean design, I will probably modify this later
 * */
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

/*
 * displayLabelToOutputScreen(pStr, pType):
 * take the content of a label (pStr) and it's class name (pType), and create the corresponding div
 * to append it in the output screen
 * Note: steps are appended on top and bottom wereas formula and jump_line are appened before the end label
 * */
function displayLabelToOutputScreen(pStr, pType) {
    let appened_element = $('<div class="' + pType + '"></div>');
    
    appened_element.append($(pStr));
    appened_element.hide(0);

    if (pType.includes('step')) {
        $('section#output').append(appened_element);
    } else {
        $('section#output div.end_label').before(appened_element);
    }

    appened_element.animate({width: 'toggle'}, 200);
}

/*
 * updateScreen():
 * take the content of a label (pStr) and it's class name, and create the corresponding div
 * to append it in the output screen
 * Note: steps are appended on top and bottom wereas formula and jump_line are appened before the end label
 * */
function updateScreen() {

    let givenLines = getAllGivenLines()
    let labelDivsInOutputScreen = $('section#output div.formula, section#output div.jump_line');
    let translater = new Translater(g_dictReplace);
    
    /* if there's no given mention, we simply clear the output screen */
    if (givenLines.length === 0) {
        labelDivsInOutputScreen.animate({width: 'toggle'}, 200, () => {
            $('section#output').html('');
        });
    } else {
        /* display " given" and "end" labels */
        if ($('section#output div.given_label').length == 0) {
            displayLabelToOutputScreen(translater.S4MToMathML('given:'), 'label step given_label');
            displayLabelToOutputScreen(translater.S4MToMathML('end', g_dictReplace), 'label step end_label');
        }
        
        let count = 1;
        let tempClass = '';
        let tempContent = '';
        for (const givenLineIndex in givenLines) {
            /* if there is not the corresponding div, we create it  */
            tempClass = getClassOfLabel(translater.S4MtoTex(givenLines[givenLineIndex]));
            tempContent = translater.S4MToMathML(givenLines[givenLineIndex]).outerHTML;
            if (labelDivsInOutputScreen[givenLineIndex] === undefined) {
                if (tempClass === 'formula') {
                    displayLabelToOutputScreen('<div class="statement_id">(' + (count++) + '):</div>' + tempContent, 'label ' + tempClass);
                } else {
                    displayLabelToOutputScreen(translater.S4MToMathML(givenLines[givenLineIndex]), 'label ' + tempClass);
                }
            } else {
                /* if it exists but it has a different value of the one in input screen*/
                let math_block = labelDivsInOutputScreen[givenLineIndex].querySelector('.ma-block');
                
                if (translater.S4MtoTex(givenLines[givenLineIndex]) !== math_block.getAttribute('alttext')) {
                    $(labelDivsInOutputScreen[givenLineIndex]).animate({width: 'toggle'}, 200, function () {
                        $(math_block).remove();
                        $(labelDivsInOutputScreen[givenLineIndex]).append($(translater.S4MToMathML(givenLines[givenLineIndex])).outerHTML);
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


/*
 * MAIN
 * */
$(function () {
    let outputScreenContent = new OutputScreenContent();
    $('textarea#input').focus();
    updateScreen();

    $('textarea#input').keydown((e) => {
        let currentInputScreenContent = getInputStr();
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
            console.log(getInputStr());
        }
    });

    $('button#looper').focus(() => {
        $('textarea#input').focus();
    })
});