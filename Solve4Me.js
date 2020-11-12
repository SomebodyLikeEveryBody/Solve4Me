/******************************************************************************
*MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMMWKOxdxOXWMMMMMMMWNXKK0OOO00KKXXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMNk;..''..'l0NXOxl:;,''''''''''''',;cok0NWMMMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMNo..cxOOkd;..,'.,;codkO00KKK000OOxdlc;'.':d0NMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMO..l000000O; .o0XNNNNNNNNNNNNNNNNNNNNNKOo:'.,o0WMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMO..lO00000k; ;KNNNNNNNNNNNNNNNNNNNNNNNNNNNKxc'.;kNMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMNo..cxkOkd;..xNNNNNNNNNX0kdolcccclodk0XNNNNNNKd,.,kNMMMMMMMMMMMMMMMMM*
*MMMMMMMMMX:  ..'..'cONNNNNNNKx:'.            .;dKNNNNNNKd,.:0WMMMMMMMMMMMMMMM*
*MMMMMMMMKc.'dkddxOKNNNNNNNKo'   .,:llooolc:'    ,ONNNNNNNKo..dNMMMMMMMMMMMMMM*
*MMMMMMM0;.:0NNNNNNNNNNNNN0;   ,d0XNNNNNNNNNXd.   ;0NNNNNNNNk'.lXMMMMMMMMMMMMM*
*MMMMMM0,.lKNNNNNNNNNNNNN0;   cKNNNNNNNNNNNNNNo.  .kNNNNNNNNNO,.lNMMMMMMMMMMMM*
*MMMMMX:.cKNNNNNNNNNNNNNNo.  .kNNNNNNNNNNNNNNNO:,;oKNNNNNNNNNNO'.dWMMMMMMMMMMM*
*MMMMWd.,ONNNNNNNNNNNNNNXl   .c0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNd..x0KXWMMMMMMM*
*MMMMK,.oNNNNNNNNXK00XNNNO,    .,:oxO0XNNNNNNNNNNNNNXKXNNNNNNNO:. ...':xNMMMMM*
*MMMMk..kNNNNNNNk;...'l0NN0l'        .';:coxOKNNNNNKl.;xXNNNXo..;lddoc'.;0MMMM*
*MMMWd.,0NNNNNNK;     .oNNNNKkdl:,..        .'l0NNNNx'  ,dKNk..cOOOOOOx, cNMMM*
*MMMWd ,0NNNNNNXk;....c0NNNNNNNNNXKOkdl:,'.    'xNNN0;  .c0Nx..oOOOOOOk; :XMMM*
*MMMMx.'ONNNNNNNNX0O0KXXXNNNNNNNNNNNNNNNNXOc.   ,0NKc..:kXNN0;.'okOOOxc..xWMMM*
*MMMMO..xNNNNNNNNNNNNx;',oKNNNNNNNNNNNNNNNNXc   'ONXOdOXNNNNN0l...,;,..;kWMMMM*
*MMMMNc cKNNNNNNNNNNXc   ;KNNNNNNNNNNNNNNNN0,   lXNNNNNNNNNNNNNx..;lox0NMMMMMM*
*MMMMMO..xNNNNNNNNNNXl   .dXNNNNNNNNNNNNNXk,   cKNNNNNNNNNNNNNXc.:XMMMMMMMMMMM*
*MMMMMWd.'kNNNNNNNNNNO;   .:x0KXXXXXKOxl:,.  .dKNNNNNNNNNNNNNXo.'OMMMMMMMMMMMM*
*MMMMMMNo.'kNNNNNNNNNN0c.    ..''''...    .,o0NNNNNNNNNNNNNNXo.'kWMMMMMMMMMMMM*
*MMMMMMMNd..dXNNNXXXXNNN0dc,.........';cldOXNNNNNNNNNNNNNNN0c.,OWMMMMMMMMMMMMM*
*MMMMMMMMWO,.;do:,'',:d0NNNXK00OOOO0KXNNNNNNNNNNNNNNNNNNNKd'.cKWMMMMMMMMMMMMMM*
*MMMMMMMMMMXl. .,colc'.'xXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKx,.,kNMMMMMMMMMMMMMMMM*
*MMMMMMMMMMWd..oO0000Oc..xNNNNNNNNNNNNNNNNNNNNNNNNNNX0o,.,xNMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMNc ;O000000x' oNNNNNNNNNNNNNNNNNNNNNNNXOo;.'ckNMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMWx..lO0000kc. :k0KXNNNNNNNNNNNNNXK0xo:'.'cxKWMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMMNx'.':cc:'.';,''',;ccllllllcc:;,''',cdOXWMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMMMMXxl;;;:lkNWNKOxdllc:::::ccllodk0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*
*MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*
******************************************************************************/



/*******************************************************************************************
* Solver:
* Object that manages the solving feature, heart of all this.
* */
function Solver() {
    this.solve = function () {
        return ('x = {-b + root(b^2 - 4ac)}/{2a}');
    };
}




/******************************************************************************************
* Translater:
* Object that manages all translation languages
* (S4ML to Tex, Tex, to MathML, S4ML to MathML).
* S4ML to Tex language is based on the pDictionnary passed as argument, a simple
* javascript object containing all Regex correspondance between S4ML patterns and Tex Patterns
* */
function Translater(pDictionnary) {
    this.dictionnary = pDictionnary;

    /*
    * texToMathML():
    * Takes a string in Tex and return a <(f)math> DOM object (+- with HTML) corresponding to the expression
    * Uses the M() function in jqmath.js
    * */    
    this.texToMathML = function (pInText) {
        let mathEl = M(pInText, true);
        return (mathEl);
    };

    /*
    * S4MtoTex():
    * Takes a string in S4M Language and return a Tex string according to pDictTranslate correspondances
    * */
    this.S4MLtoTex = function (pInText) {
        let outText = pInText;

        for (const key in this.dictionnary) {
            outText = outText.replace(new RegExp(key, 'g'), this.dictionnary[key]);
        }
    
        return (outText);
    };

    /*
    * S4MLToMathML():
    * Takes a string in S4M Language and return a <math> DOM object corresponding to the expression
    * */
    this.S4MLToMathML = function (pInText) {
        return this.texToMathML(this.S4MLtoTex(pInText));
    };
}

/******************************************************************************************
* InputScreen:
* Wrapper object that wrap textarea#input
* to implement directly all needed features
* */
function InputScreen() {
    this.defaultContent = 'given:\n\nend';
    this.jqEl = $('textarea#input');

    /*
    * this.keydown():
    * Shortcut to use this.jqEl.keydown
    * */
    this.keydown = function (pFunction) {
        this.jqEl.keydown(pFunction);
    };

    /*
    * this.keyup():
    * Shortcut to use this.jqEl.keyup
    * */
    this.keyup = function (pFunction) {
        this.jqEl.keyup(pFunction);
    };

    /*
    * this.clear():
    * Clear the inputScreen
    * */
    this.clear = function () {
        this.jqEl.val(this.defaultContent);
    };

    /*
    * this.focus():
    * Put the focus on the inputScreen
    * */
    this.focus = function () {
        this.jqEl.focus();
    }

    /*
    * this.getInputStr():
    * Gives the content of the inputScreen in raw str
    * */
    this.getInputStr = function () {
        return this.jqEl.val();
    }

    /*
    * this.getGivenStr():
    * Returns the part of #textarea#input that is between given: and end included
    * */
    this.getGivenStr = function () {
        let givenStr = this.getInputStr().match(/given:[ ]*\n(.|\n)*?\nend/gmi)
        if (givenStr !== null) {
            return givenStr[0];
        }

        return ('');
    }

    /*
    * this.getAllGivenLines():
    * Returns an array containg each given statement AND jump lines defined in the given block in S4M Language
    * */
    this.getAllGivenLines = function () {
        let givenStr = this.getGivenStr();
        let givenStatements = [];

        if (givenStr) {
            givenStatements = givenStr.replace(/given:[ ]*\n/mi, '');
            givenStatements = givenStatements.replace(/\nend/mi, '');
            givenStatements = givenStatements.split('\n');
        }

        return givenStatements;
    }

    /*
    * this.getAllGivenStatements():
    * Returns an array containg each given statement defined in the given block in S4M Language.
    * In other words, it returns this.getAllGivenLines() without the '' values
    * */
    this.getAllGivenStatements = function () {
        let givenLines = this.getAllGivenLines();

        return (givenLines.filter((str) => (str != '')));
    }

    /*
    * this.getInstructions():
    * return the instructions in the inputScreen (all that is not in given end block)
    * */
    this.getInstructions = function () {
        let instructions = this.getInputStr().replace(this.getGivenStr(), '').trim();

        return instructions;
    }
}

/*******************************************************************************************
* OutputScreen:
* Wrapper object that wrap section#output
* to implement directly all needed features
* */
function OutputScreen(pTranslater) {
    this.jqEl = $('section#output');
    this.translater = pTranslater;

    /*
    * this.clear():
    * erase all the content of the outputScreen
    * */
    this.clear = function () {
        this.jqEl.find('div.label').fadeOut(200, () => {
            this.jqEl.html('');
        });
    };

    /*
    * this.clearGivenLabels():
    * erase the given block in the outputScreen
    * */
    this.clearGivenLabels = function () {
       this.getGivenLabels().fadeOut(200);
    }

    /*
    * this.getGivenFormulaDivs():
    * returns the list of all labels containing formula in the given block)
    * */
    this.getGivenFormulaDivs = function () {
        return this.jqEl.find('div.formula');
    };

    /*
    * this.getGivenLabels():
    * returns the list of all labels involved in the given statements
    * (i.e div [given], div [end] and all formulas between)
    * */
    this.getGivenLabels = function () {
        return  this.jqEl.find('div.formula, div.step');
    };


    /*
    * this.getEndLabel():
    * returns the div element containing the End mention of the given block
    * */
    this.getEndLabel = function () {
        return this.jqEl.find('div.end_label');
    }

    /*
    * this.displayLabel(pContentStr, pType):
    * take the content of a label (pContentStr) and it's class name (pType), and create the corresponding div
    * to append it in the output screen
    * Note: steps are appended on bottom wereas formulas are appened before the end label
    * */
    this.displayLabel = function(pContentStr, pType) {
        let appened_element = $('<div class="' + pType + '"></div>');
        
        appened_element.append($(pContentStr));
        appened_element.hide(0);

        if (pType.includes('step')) {
            this.jqEl.append(appened_element);
        } else {
            this.getEndLabel().before(appened_element);
        }

        appened_element.animate({width: 'toggle'}, 200);
    }

    this.displayGivenLabel = function() {
        this.displayLabel(this.translater.S4MLToMathML('given:'), 'label step given_label');
    };

    this.displayEndLabel = function () {
        this.displayLabel(this.translater.S4MLToMathML('end'), 'label step end_label');
    };

    /*
    * this.displaySolution(pSolutionStr):
    * take the solution of the calculus (pSolutionStr) and create the corresponding div
    * to append it in the output screen
    * */
    this.displaySolution = function (pSolutionStr) {
        let solutionEl = $('<div class="label solution">' + pSolutionStr + '</div>').hide(0)

        this.jqEl.find('div.solution').slideUp(200);
        this.jqEl.prepend(solutionEl);
        solutionEl.slideDown(200);
    };

    this.containGivenLabel = function () {
        let givenLabel = this.jqEl.find('div.given_label');

        return (givenLabel.length !== 0);
    }
}

/*******************************************************************************************
* Controller:
* Controller object of the application.
* Manages the synchronization between inputScreen and outputScreen, and the events
* setting through ClickAndKeyListener object
* Note: to optimize the execution, the synchronization occurs when there is
*       a modification of the given bloc in the inputScreen, instead of
*       launching the synchronization each time there's an UP/DOWN/ENTER/BACKSPACE
*       key pressed. This is possible by saving the given block value
*       in this.lastKnownGivenValueInInputScreen to compare it to the
*       current given block value
* */
function Controller(pInputScreen, pOutputScreen, pSolver) {

    this.inputScreen = pInputScreen;
    this.outputScreen = pOutputScreen;
    this.solver = pSolver;
    this.lastKnownGivenValueInInputScreen = this.inputScreen.getGivenStr();
    this.clickAndKeyListener = new ClickAndKeyListener(this.inputScreen, this.outputScreen);

    /*
    * this.synchronizeInputScreenAndOutputScreen():
    * Compare the content of inputScreen and OutputScreen and synchronize the outpuScreen in function
    * */
    this.setkeyAndMouseEvents = function () {
        this.clickAndKeyListener.setkeyAndMouseEvents(this, this.solver);
    };
    
    /*
    * this.synchronizeInputScreenAndOutputScreen():
    * Compare the content of inputScreen and OutputScreen and synchronize the outpuScreen in function
    * */
    this.synchronizeInputScreenAndOutputScreen = function () {
        let givenStatements = this.inputScreen.getAllGivenStatements();
        
        if (givenStatements.length === 0) {
            this.outputScreen.clearGivenLabels();
        } else {
            if (!this.outputScreen.containGivenLabel()) {
                this.outputScreen.displayGivenLabel();
                this.outputScreen.displayEndLabel();
            }

            this.synchronizeGivenStatements();
        }
    };

    /*
    * this.synchronizeGivenStatements():
    * compare each given statement in the inputScreen with its corresponding div's content in the outputScreen and
    * update the div's content in the outputScreen if they differs
    * */
    this.synchronizeGivenStatements = function () {
        let givenStatements = this.inputScreen.getAllGivenStatements();
        let formulaDivsInOutputScreen = this.outputScreen.getGivenFormulaDivs();
        let translater = this.outputScreen.translater;
        let lastStatementId = formulaDivsInOutputScreen.length + 1;

        let tempContent = '';
        for (const givenStatementsIndex in givenStatements) {
            tempContent = translater.S4MLToMathML(givenStatements[givenStatementsIndex]).outerHTML;

            /* if the the corresponding div doesn't exists, we create it and display it */
            if (formulaDivsInOutputScreen[givenStatementsIndex] === undefined) {
                this.outputScreen.displayLabel('<div class="statement_id">(' + (lastStatementId++) + '):</div>' + tempContent, 'label formula');
            } else {
                /* if it exists but it has a different content with the corresponding line in input screen, we modify its content */
                let currentDivEl = $(formulaDivsInOutputScreen[givenStatementsIndex]);
                let currentMathBlock = currentDivEl.find('.ma-block');
                if (translater.S4MLtoTex(givenStatements[givenStatementsIndex]) !== currentMathBlock.attr('alttext')) {
                    let newMathBlock = $(translater.S4MLToMathML(givenStatements[givenStatementsIndex]).outerHTML);

                    currentDivEl.animate({width: 'toggle'}, 200, function () {
                        $(currentMathBlock).replaceWith(newMathBlock);
                        currentDivEl.animate({width: 'toggle'}, 200);
                    });
                }
            }
        }

        if (givenStatements.length !== formulaDivsInOutputScreen.length) {
            this.deleteExcedentaryLabelDivs(givenStatements.length);
        }
    };

    /*
    * this.deleteExcedentaryLabelDivs(pLastDivIndex):
    * delete all label divs in the outputScreen that are in excess,
    * That is to say if there are 3 given statements in the intputScreen, and 5 divs in the outputscreen,
    * we will update the content of the 3 firsts divs if they differ from the input statements,
    * but we will then need to delete the 2 last divs.
    * That's what this function does.
    * */
    this.deleteExcedentaryLabelDivs = function (pLastDivIndex) {
        let index = pLastDivIndex;
        let formulaDivsInOutputScreen = this.outputScreen.getGivenFormulaDivs();
        while (formulaDivsInOutputScreen[index] !== undefined) {
            $(formulaDivsInOutputScreen[index]).animate({width: 'toggle'}, 200).remove();
            index++;
        }
    };


    /*
    * this.launchSolving():
    * Launchs the solving
    * */
    this.launchSolving = function () {
        $('button#do_solve').click();
    }
}

/*******************************************************************************************
* ClickAndKeyListener:
* Object that Manages the events definition
* */
function ClickAndKeyListener(pInputScreen, pOutputScreen) {
    this.ENTER_KEY = 13;
    this.CTRL_KEY = 17;
    this.UP_KEY = 38;
    this.DOWN_KEY = 40;
    this.ESCAPE_KEY = 27;
    this.BACKSPACE_KEY = 8;

    this.IsCtrlKeyIsDown = false;
    this.inputScreen = pInputScreen;
    this.outputScreen = pOutputScreen;
    
    /*
    * setKeydownEventsToInputScreen(pController):
    * Definition of what to do when we press keys in the inputScreen.
    *  .  CTRL + ENTER ==> solve
    *  .  UP / DOWN / ENTER / BACKSPACE ==> synchronize inputScreen and outputScreen if necessary
    *  .  ESCAPE ==> erase inputScreen and clear outputScreen
    * */
    this.setKeydownEventsToInputScreen = function (pController) {
        this.inputScreen.keydown((e) => {
            if (e.which === this.ENTER_KEY && this.IsCtrlKeyIsDown) {
                pController.launchSolving();
            }    

            if ((e.which === this.UP_KEY)
            || (e.which === this.DOWN_KEY)
            //|| (e.which === this.BACKSPACE_KEY)
            || (e.which === this.ENTER_KEY)) {
                let currentInputScreenContent = this.inputScreen.getGivenStr();
                if (pController.lastKnownGivenValueInInputScreen !== currentInputScreenContent) {
                    pController.lastKnownGivenValueInInputScreen = currentInputScreenContent;
                    pController.synchronizeInputScreenAndOutputScreen();
                }
        
            } else if (e.which === this.ESCAPE_KEY) {
                this.inputScreen.clear();
                this.outputScreen.clear();
            } else if (e.which === this.CTRL_KEY) {
                this.IsCtrlKeyIsDown = true;
            }
        });
    };

    /*
    * setKeyupEventsToInputScreen():
    * Function to manage the this.IsCtrlKeyIsDown attribute to permit
    * the (CTRL + ENTER ==> solve) feature
    * */
    this.setKeyupEventsToInputScreen = function () {
        this.inputScreen.keyup((e) => {
            if (e.which === this.CTRL_KEY) {
                this.IsCtrlKeyIsDown = false;
            }
        });
    };

    /*
    * setClickSolveButtonEvent(pSolver):
    * Definition of what to do when we click on the solve button of the GUI.
    * */
    this.setClickSolveButtonEvent = function (pSolver) {
        $('button#do_solve').click(() => {
            if (this.inputScreen.getInstructions() !== '') {
                this.outputScreen.displaySolution(this.outputScreen.translater.S4MLToMathML(pSolver.solve()).outerHTML);
            }
        });
    };

    /*
    * setLooperEvent():
    * Definition of the loop event so that when we start with the focus on the inputScreen,
    * when we press tab multiples times, it will alternate between the solve button and the inputScreen.
    * */
    this.setLooperEvent = function () {
        $('button#looper').focus(() => {
            this.inputScreen.focus();
        })
    };

    /*
    * setkeyAndMouseEvents():
    * Set all events definitions of the ClickAndKeyListener object
    * */
    this.setkeyAndMouseEvents = function (pController, pSolver) {
        this.setKeydownEventsToInputScreen(pController);
        this.setKeyupEventsToInputScreen();
        this.setClickSolveButtonEvent(pSolver);
        this.setLooperEvent();
    };
    }