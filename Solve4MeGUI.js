/******************************************************************************
 * File name: Solve4MeGUI.js
 * Manage the Vue problematics.
 *
 * requires: ./libs/jqmath/jqmath-etc-0.4.6.min
 *           ./libs/jquery/jquery-3.5.1.min
 */


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



/******************************************************************************************
* Translater:
* Object that manages all translation languages
* (S4ML to Tex, Tex, to MathML, S4ML to MathML).
* S4ML to Tex language is based on the pDictionnary passed as argument, a simple
* javascript object containing all Regex correspondance between S4ML patterns and Tex Patterns
* */
function Translater(pDictS4MLToTex, pDictS4MLToNerdamer, pDictLaTeXToTex) {
    this.dictS4MLToTex = pDictS4MLToTex;
    this.dictS4MLToNerdamer = pDictS4MLToNerdamer;
    this.dictLaTeXToTex = pDictLaTeXToTex;

    /*
    * Translater.texToMathML():
    * Takes a string in Tex and return a <(f)math> DOM object (+- with HTML) corresponding to the expression
    * Uses the M() function in jqmath.js
    * */
    this.texToMathML = function (pInText) {
        let mathEl = M(pInText, true);
        return (mathEl);
    };

    /*
    * Translater.S4MtoTex():
    * Takes a string in S4M Language and return a Tex string according to this.dictS4MLToTex correspondances
    * */
    this.S4MLtoTex = function (pInText) {
        let outText = pInText;

        for (const key in this.dictS4MLToTex) {
            outText = outText.replace(new RegExp(String.raw( { raw: key }), 'g'), String.raw( { raw: this.dictS4MLToTex[key] }));
        }

        return (outText);
    };

    /*
    * Translater.S4MLToMathML():
    * Takes a string in S4M Language and return a <math> DOM object corresponding to the expression
    * */
    this.S4MLToMathML = function (pInText) {
        return this.texToMathML(this.S4MLtoTex(pInText));
    };

    /*
    * Translater.S4MLToNerdamer(pInTex):
    * Takes a string in S4M Language and returns it in nerdamer language according to this.dictS4MLToNerdamer correspondances
    * */
    this.S4MLToNerdamer = function (pInText) {
        let outText = pInText;

        for (const key in this.dictS4MLToNerdamer) {
            outText = outText.replace(new RegExp(String.raw( { raw: key } ), 'g'), String.raw( { raw: this.dictS4MLToNerdamer[key] }));
        }

        return (outText);
    };

    /*
    * Translater.LaTeXToTex():
    * Takes a string in LaTeX returns it in Tex according to this.dictLaTeXToTex correspondances
    *
    * Note: for some reasons I can't explain, replacing expressions containing backslash '\' (like '\cdots' or '\sum')
    * with new RegExp(expression) generates parsing errors.
    * So I have to replace all '\' with [*BCKSLSH*] using /regexp/ syntax and the use "[*BCKSLSH*]" in the dicts to locate them.
    * */

    this.LaTeXToTex = function(pInText) {
        let outText = pInText.replace(/\\/g, '[*BCKSLSH*]');

        for (const key in this.dictLaTeXToTex) {
            outText = outText.replace(new RegExp(String.raw( { raw: key }), 'g'), String.raw( { raw: this.dictLaTeXToTex[key] }));
        }

        return (outText);
    };

    /*
    * Translater.LaTexToProperLatexExpression():
    * Takes a string in LaTeX and proper its expression (for example, -a + b ==> b - 1, 3* a^-1 + b ==> 3/a + b)
    * This is because nerdamer returns expressions that are corrects but not always easily readable
    * and the proper operation has to be done once LaTeX is generated by nerdamer and not before, otherwise, the expression will
    * regain its original form.
    * */
    this.LaTexToProperLatexExpression = function(pInText) {
        let outText = pInText;

        return (outText);
    };

    /*
    * Translater.checkParenthesisPattern(pStr):
    * Checks if pStr has as many "(" as ")"
    * */
    this.checkParenthesisPattern = function (pStr) {
        let nbOpeningParenthesis = pStr.split('(').length - 1;
        let nbClosingParenthesis = pStr.split(')').length - 1;

        return (nbOpeningParenthesis === nbClosingParenthesis);
    }

    /*
    * Translater.getOpeningParenthesisIndexes(pStr):
    * Returns an array containing all indexes of '(' char in pStr
    * from the last to the first (to browse it easily later given that
    * we will process the inner parenthesis blocks before the outer)
    * */
    this.getOpeningParenthesisIndexes = function (pStr) {
        let retArray = [];

        for (letterIndex in pStr) {
            letterIndex = Number(letterIndex);
            if (pStr[letterIndex] == '(') {
                retArray.unshift(Number(letterIndex));
            }
        }

        return retArray;
    }

    /*
    * Translater.parenthesisParse(pExpression, pTranslateFunction): <UNDER DEVELOPPEMENT>
    * Funtion suppose to translate expressions from the inners parenthesis expressions to the outers
    * to avoid bugs of parenthesis counting that is not managed by the regexp.
    * But we probably will use a parser generated by a grammar.
    * */
    this.parenthesisParse = function (pExpression, pTranslateFunction) {
        let openingParenthesisIndexes = this.getOpeningParenthesisIndexes(pExpression);
        let count = 0

        console.log('-----------------');
        console.log(pExpression);
        console.log(openingParenthesisIndexes)
        console.log('-----------------');

        for (openingParenthesisIndex of openingParenthesisIndexes) {
            console.log('--------[index ' + openingParenthesisIndex);
            let subStr = pExpression.substring(openingParenthesisIndex);
            let closingParenthesisIndex = subStr.indexOf(')') + openingParenthesisIndex;
            let tempExpression = pExpression.substring(openingParenthesisIndex + 1, closingParenthesisIndex);

            console.log(tempExpression.substring(0, openingParenthesisIndex))
        }
    }
}

/******************************************************************************************
* InputScreen:
* Wrapper object that wrap textarea#input
* to implement directly all needed features
* */
function InputScreen() {
    this.defaultContent = 'given:\n\nend\n\n';
    this.jqEl = $('textarea#input');
    this.autoCompletionWidget = new AutoCompletionWidget(this);

    /*
    * InputScreen.keydown():
    * Shortcut to use this.jqEl.keydown
    * */
    this.keydown = function (pFunction) {
        this.jqEl.keydown(pFunction);
    };

    /*
    * InputScreen.keyup():
    * Shortcut to use this.jqEl.keyup
    * */
    this.keyup = function (pFunction) {
        this.jqEl.keyup(pFunction);
    };

    /*
    * InputScreen.clear():
    * Clear the inputScreen
    * */
    this.clear = function () {
        this.jqEl.val(this.defaultContent);
        this.setCursorAfterGivenKW();
        this.autoCompletionWidget.hide();
    };

    /*
    * InputScreen.setCursorAfterGivenKW():
    * Puts the cursor after "given:\n" statements in the inputScreen.
    * Called when a this.clear() call occurs
    * */
    this.setCursorAfterGivenKW = function () {
        this.jqEl[0].setSelectionRange(7, 7)

    };

    /*
    * InputScreen.focus():
    * Put the focus on the inputScreen
    * */
    this.focus = function () {
        this.jqEl.focus();
    };

    /*
    * InputScreen.getCursorLinePosition():
    * Returns the line number position of the cursor in the inputScreen
    * */
    this.getCursorLinePosition = function () {
        return (this.getInputStr().substr(0, this.getSelectionStart()).split('\n').length);
    };

    /*
    * InputScreen.getSelectionStart():
    * Returns the selectionStart value of the <textatrea#input> element.
    * This will be rewrote in a near future to be up to date ==> <REWRITE>
    * */
    this.getSelectionStart = function () {
        return (this.jqEl.get(0).selectionStart);
    };

    /*
    * InputScreen.getInputStr():
    * Gives the content of the inputScreen in raw str
    * */
    this.getInputStr = function () {
        return this.jqEl.val();
    };

    /*
    * InputScreen.getGivenStr():
    * Returns the part of #textarea#input that is between given: and end included
    * */
    this.getGivenStr = function () {
        let givenStr = this.getInputStr().match(/given:[ ]*\n(.|\n)*?\nend/gmi)
        if (givenStr !== null) {
            return givenStr[0];
        }

        return ('');
    };

    /*
    * InputScreen.getAllGivenLines():
    * Returns an array containg each given statement AND jump lines defined in the given block in S4M Language
    * */
    this.getAllGivenLines = function () {
        let givenStr = this.getGivenStr();
        let givenStatements = [];

        if (givenStr) {
            givenStatements = givenStr.replace(/given:[ ]*\n/mi, '');
            givenStatements = givenStatements.replace(/\nend/mi, '');
            givenStatements = givenStatements.split('\n');
            givenStatements = givenStatements.map((el) => el.trim());
        }

        return givenStatements;
    };

    /*
    * InputScreen.getAllGivenStatements():
    * Returns an array containg each given statement defined in the given block in S4M Language.
    * In other words, it returns this.getAllGivenLines() without the '' values
    * */
    this.getAllGivenStatements = function () {
        let givenLines = this.getAllGivenLines();

        return (givenLines.filter((str) => (str != '')));
    };

    /*
    * InputScreen.getInstructions():
    * Returns the instructions in the inputScreen (all that is not in given end block)
    * */
    this.getInstructions = function () {
        let instructions = this.getInputStr().replace(this.getGivenStr(), '').trim();

        return instructions;
    };

    /*
    * InputScreen.getCurrentlyTypingWord():
    * Returns the word being typed by the user, more precisely, the part of the word before the "(" character.
    * For example, if we are currently typing "cos(12345" ==> it returns "cos".
    * This function is used to filter the helperFunctionsList object to display the functions list
    * according to what the user is currently typing.
    * */
    this.getCurrentlyTypingWord = function () {
        let inputTextFromStartToCursorPosition = this.getInputStr().substring(0, this.getSelectionStart());
        let lastWordOfcursorLine = inputTextFromStartToCursorPosition.split('\n').pop().split(' ').pop().split('(').pop();

        return lastWordOfcursorLine;
    };

    /*
     * InputScreen.getCaretCoordinates():
     * Returns the Top and Left coordinates of the caret in the inputScreen.
     * Uses getCaretCoordinates() function defined in  libs/textareaCaretPosition/textareaCaretPosition.js.
     * The code and a lot of other features are available here: https://github.com/component/textarea-caret-position
     * */
    this.getCaretCoordinates = function () {
        return getCaretCoordinates(this.jqEl.get(0), this.jqEl.get(0).selectionEnd);
    };

    /*
     * InputScreen.setContent(pValue):
     * Erase all the content of the inputScreen and set its content to pValue
     * Uses getCaretCoordinates() function defined in  libs/textareaCaretPosition/textareaCaretPosition.js.
     * The code and a lot of other features are available here: https://github.com/component/textarea-caret-position
     * */
    this.setContent = function (pValue) {
        this.jqEl.val(pValue)
    }

    /*
     * InputScreen.putCursorAt(pValue):
     * Erase all the content of the inputScreen and set its content to pValue
     * Uses getCaretCoordinates() function defined in  libs/textareaCaretPosition/textareaCaretPosition.js.
     * The code and a lot of other features are available here: https://github.com/component/textarea-caret-position
     * */
    this.putCursorAt = function (pPosition) {
        this.jqEl.prop('selectionEnd', pPosition)
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
    * OutputScreen.clear():
    * Erases all the content of the outputScreen
    * */
    this.clear = function () {
        this.clearGivenLabels();
        this.clearSolutionsLabels();
    };

    /*
    * OutputScreen.clearGivenLabels():
    * Erases the given block in the outputScreen
    * */
    this.clearGivenLabels = function () {
        let givenLabels = this.getGivenLabels();
        givenLabels.fadeOut(200, function () {
            givenLabels.remove();
        });
    }

    /*
    * OutputScreen.clearSolutionsLabels():
    * Erases the solutions blocks in the outputScreen using fadeOut
    * */
    this.clearSolutionsLabels = function () {
        let solutionLabels = this.jqEl.find('div.solution');
        solutionLabels.fadeOut(200, function () {
            solutionLabels.remove();
        });
    }

    /*
    * OutputScreen.removeSolutionsLabel():
    * Erases the solutions blocks in the outputScreen using slideUp
    * */
    this.removeSolutionsLabel = function () {
        this.jqEl.find('div.solution').slideUp(200, function () {
            $(this).remove();
        });
    };

    /*
    * OutputScreen.getGivenFormulaDivs():
    * Returns the list of all labels containing formulas in the given block
    * */
    this.getGivenFormulaDivs = function () {
        return this.jqEl.find('div.formula');
    };

    /*
    * OutputScreen.getGivenLabels():
    * Returns the list of all labels involved in the given statements
    * (i.e div [given], div [end] and all formulas between)
    * */
    this.getGivenLabels = function () {
        return  this.jqEl.find('div.formula, div.step');
    };


    /*
    * OutputScreen.getEndLabel():
    * Returns the div element containing the End mention of the given block
    * */
    this.getEndLabel = function () {
        return this.jqEl.find('div.end_label');
    }

    /*
    * OutputScreen.createAndDisplayLabel(pContentStr, pType):
    * Takes the content of a label (pContentStr) and it's class name (pType), and creates the corresponding div
    * to append it in the output screen
    * Note: steps are appended on bottom wereas formulas are appened before the end label
    * */
    this.createAndDisplayLabel = function(pContentStr, pType) {
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

    /*
    * OutputScreen.createAndDisplayGivenLabel(pSolutionStr):
    * Displays in the outputScreen the first "Given" label
    * */
    this.createAndDisplayGivenLabel = function() {
        this.createAndDisplayLabel(this.translater.S4MLToMathML('given:'), 'label step given_label');
    };

    /*
    * OutputScreen.createAndDisplayEndLabel():
    * Takes the solution of the calculus (pSolutionStr) and creates the corresponding div
    * to append it in the output screen
    * */
    this.createAndDisplayEndLabel = function () {
        this.createAndDisplayLabel(this.translater.S4MLToMathML('end'), 'label step end_label');
    };

    /*
    * OutputScreen.displaySolution(pSolutionStr):
    * Takes the solution of the calculus (pSolutionStr) and creates the corresponding div
    * and appends it in the output screen
    * */
    this.displaySolution = function (pSolutionStr) {
        let solutionEl = $('<div class="label solution">' + pSolutionStr + '</div>').hide(0)

        this.jqEl.find('div#solutions_container').find('hr').before(solutionEl);
        solutionEl.slideDown(200);
    };

    /*
    * OutputScreen.displaySolutions(pInstructionsArray, pAnswersArray):
    * Takes the instructions (pInstructionsArray) in S4ML and its corresponding answers (pAnswersArray) in nerdamer language,
    * translates each instruction and answer in Tex, and displays the result in outputScreen.
    * */
    this.displaySolutions = function (pInstructionsArray, pAnswersArray) {
        let tempLatexAnswer = '';
        let tempTexAnswer = '';
        let tempInstruction = '';
        for(const responseIndex in pAnswersArray) {        
            tempLatexAnswer = pAnswersArray[responseIndex];
            tempTexAnswer = this.translater.LaTeXToTex(this.translater.LaTexToProperLatexExpression(tempLatexAnswer));
            tempInstruction = this.translater.S4MLtoTex(pInstructionsArray[responseIndex]);

            console.log('resultat LaTeX -->' + tempLatexAnswer);
            console.log('resultat TeX -->' + tempTexAnswer);

            this.displaySolution(this.translater.texToMathML('\\table ' + tempInstruction + tempTexAnswer).outerHTML);
        }
    };


    /*
    * this.containGivenLabel():
    * Returns true if the outputScreen contains a <div.given_label>
    * */
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
    this.clickAndKeyListener = new ClickAndKeyListener(this.inputScreen, this.outputScreen);
    this.lastKnownGivenValueInInputScreen = this.inputScreen.getGivenStr();
    this.lastKnownCursorLinePositionInInputScreen = 1;
    this.helperFunctionList = new HelperFunctionList();

    /*
    * Controller.hasCursorLineInInputScreenChanged():
    * Returns true if the cursor position in the inputScreen changed to another line
    * */
    this.hasCursorLineInInputScreenChanged = function () {
        if (this.lastKnownCursorLinePositionInInputScreen !== this.inputScreen.getCursorLinePosition()) {
            this.updateLastKnownCursorLinePositionInInputScreen();
            return true;
        }

        return false;
    };

    /*
    * Controller.updateLastKnownCursorLinePositionInInputScreen():
    * Modifies this.lastKnownGivenValueInInputScreen attribute with new value
    * */
    this.updateLastKnownCursorLinePositionInInputScreen = function () {
        this.lastKnownCursorLinePositionInInputScreen = this.inputScreen.getCursorLinePosition();
    };

    /*
    * Controller.setkeyAndMouseEvents():
    * Set all events using the ClickAndKeyListener object
    * */
    this.setkeyAndMouseEvents = function () {
        this.clickAndKeyListener.setkeyAndMouseEvents(this, this.solver);
    };
    
    /*
    * Controller.synchronizeInputScreenAndOutputScreen():
    * Compare the content of inputScreen and OutputScreen and synchronize the outpuScreen according to
    * */
    this.synchronizeInputScreenAndOutputScreen = function () {
        let givenStatements = this.inputScreen.getAllGivenStatements();
        
        if (givenStatements.length === 0) {
            this.outputScreen.clearGivenLabels();
            this.lastKnownGivenValueInInputScreen = '';
        } else {
            if (!this.outputScreen.containGivenLabel()) {
                this.outputScreen.createAndDisplayGivenLabel();
                this.outputScreen.createAndDisplayEndLabel();
            }

            this.synchronizeGivenStatements();
        }
    };

    /*
    * Controller.synchronizeGivenStatements():
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
                this.outputScreen.createAndDisplayLabel('<div class="statement_id">(' + (lastStatementId++) + '):</div>' + tempContent, 'label formula');
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
    * Controller.deleteExcedentaryLabelDivs(pLastDivIndex):
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
            $(formulaDivsInOutputScreen[index]).slideToggle(200, function () {
                $(this).remove();
            });

            index++;
        }
    };


    /*
    * Controller.launchSolving():
    * Launchs the solving
    * */
    this.launchSolving = function () {
        $('button#do_solve').click();
    }

    /*
    * Controller.updateHelperContent():
    * Updates the content of the helper screen in function of what the user
    * is currently typing in the inputScreen
    * */
    this.updateHelperContent = function () {
        let helperEl = $('div#helper');
        let selectedArray = this.getHelperFunctionsList();
        let displayStr = '';

        helperEl.html('<table>');
        for (el of selectedArray) {
            displayStr += '<tr><td>|___ ' + el.keyword + '</td><td>|___ [' + el.explanation + ']</td></tr>';
        }

        displayStr += '</table>';
        helperEl.append(displayStr);
    }

    this.getHelperFunctionsList = function () {
        return this.helperFunctionList.value.filter(el => el.keyword.toLowerCase().includes(this.inputScreen.getCurrentlyTypingWord().toLowerCase()));
    }

    this.getKeywordsList = function () {
        let helperFunctionsList = this.getHelperFunctionsList();
        let retKeywords = helperFunctionsList.map((el) => {
            let indexOfOpeningParenthesis = el.keyword.indexOf('(');

            if (indexOfOpeningParenthesis !== -1) {
                return el.keyword.substring(0, indexOfOpeningParenthesis + 1) + ')';
            } else {
                return el.keyword;
            }
        });

        return (retKeywords.slice(0, 11));
        
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
    this.END_KEY = 35;
    this.SPACE_KEY = 32;
    this.UP_KEY = 38;
    this.DOWN_KEY = 40;

    this.IsCtrlKeyIsDown = false;
    this.inputScreen = pInputScreen;
    this.outputScreen = pOutputScreen;

    /*
    * ClickAndKeyListener.setKeydownEventsToInputScreen(pController):
    * Definition of what to do when we press keys in the inputScreen.
    *  .  CTRL + ENTER ==> solve
    *  .  CTRL + ESCAPE ==> erase inputScreen and clear outputScreen
    *  .  CTRL + SPACE ==> display / hide the auto-completer widget
    *  .  UP / DOWN / ENTER / BACKSPACE ==> synchronize inputScreen and outputScreen if necessary
    *                                       or navigation into the auto-completer widget
    *  .  CTRL + ESCAPE ==> erase inputScreen and clear outputScreen
    * */
    this.setKeydownEventsToInputScreen = function (pController) {
        this.inputScreen.keydown((e) => {
            if (e.which === this.CTRL_KEY) {
                this.IsCtrlKeyIsDown = true;
            }

            /*
             * Ctrl key down + ENTER or SPACE or ESCAPE
             * */
            if (this.IsCtrlKeyIsDown) {
                if (e.which === this.ENTER_KEY) {
                    pController.launchSolving();

                } else if (e.which === this.SPACE_KEY) {
                    if (this.inputScreen.autoCompletionWidget.isVisible === true) {
                        this.inputScreen.autoCompletionWidget.hide();
                        this.inputScreen.autoCompletionWidget.isVisible = false;

                    } else {
                        let keywordsList = pController.getKeywordsList();
                        
                        this.inputScreen.autoCompletionWidget.show(keywordsList);
                        this.inputScreen.autoCompletionWidget.isVisible = true;
                    }

                } else if (e.which === this.ESCAPE_KEY) {
                    this.inputScreen.clear();
                    this.outputScreen.clear();
                    pController.lastKnownGivenValueInInputScreen = this.inputScreen.getGivenStr();
                }

            /*
             * Ctrl key up and auto-completer widget visible
             * */
            } else if (this.inputScreen.autoCompletionWidget.isVisible) {
                if (e.which === this.ESCAPE_KEY) {
                    this.inputScreen.autoCompletionWidget.hide();
                    this.inputScreen.autoCompletionWidget.isVisible = false;

                } else if (e.which === this.ENTER_KEY) {
                    let selectedKeyword = this.inputScreen.autoCompletionWidget.getSelectedKeyword();
                    let currentlyTypingWord = this.inputScreen.getCurrentlyTypingWord();
                    let inputStr = this.inputScreen.getInputStr();
                    let startText = inputStr.substring(0, this.inputScreen.getSelectionStart() - currentlyTypingWord.length);
                    let endText = inputStr.substring(this.inputScreen.getSelectionStart(), inputStr.length);
                    
                    this.inputScreen.setContent(startText + selectedKeyword + endText);
                    
                    if (selectedKeyword.slice(-1) === ")") {
                        this.inputScreen.putCursorAt(startText.length + selectedKeyword.length - 1);
                    } else {
                        this.inputScreen.putCursorAt(startText.length + selectedKeyword.length);
                    }
                    
                    this.inputScreen.autoCompletionWidget.hide();
                    this.inputScreen.autoCompletionWidget.isVisible = false;

                    e.preventDefault();

                } else if (e.which === this.DOWN_KEY) {
                    this.inputScreen.autoCompletionWidget.selectNextKeyword();
                    e.preventDefault();

                } else if (e.which === this.UP_KEY) {
                    this.inputScreen.autoCompletionWidget.selectPreviousKeyword();
                    e.preventDefault();
                }
            }
        });
    };

    this.updateGivenStatementsInOutputScreenIfNeeded = function (pController) {
        let currentGivenStrInInputScreen = this.inputScreen.getGivenStr();
        if (pController.lastKnownGivenValueInInputScreen !== currentGivenStrInInputScreen) {
            pController.lastKnownGivenValueInInputScreen = currentGivenStrInInputScreen;
            pController.synchronizeInputScreenAndOutputScreen();
        }
    };

    /*
    * ClickAndKeyListener.setKeyupEventsToInputScreen():
    * Function to manage the this.IsCtrlKeyIsDown attribute to permit
    * the (CTRL + ENTER ==> solve) feature
    * */
    this.setKeyupEventsToInputScreen = function (pController) {
        this.inputScreen.keyup((e) => {
            pController.updateHelperContent();

            if (this.inputScreen.autoCompletionWidget.isVisible === true && e.which !== this.UP_KEY && e.which !== this.DOWN_KEY) {
                this.inputScreen.autoCompletionWidget.updateContentAndShow(pController.getKeywordsList());
            }

            if (e.which === this.CTRL_KEY) {
                this.IsCtrlKeyIsDown = false;
            }

            if ((e.which === this.UP_KEY)
            || (e.which === this.DOWN_KEY)
            || (e.which === this.BACKSPACE_KEY)
            || (e.which === this.END_KEY)
            || (e.which === this.ENTER_KEY)) {
                if (pController.hasCursorLineInInputScreenChanged()) {
                    this.updateGivenStatementsInOutputScreenIfNeeded(pController);
                }
            }
        });
    };

    /*
    * ClickAndKeyListener.setClickSolveButtonEvent(pSolver):
    * Definition of what to do when we click on the solve button of the GUI.
    * */
    this.setClickSolveButtonEvent = function (pSolver, pController) {
        $('button#do_solve').click(() => {
            let S4MLInstructions = this.inputScreen.getInstructions();
            let S4MLGivenStatements = this.inputScreen.getAllGivenStatements();

            this.outputScreen.removeSolutionsLabel(pController);
            this.updateGivenStatementsInOutputScreenIfNeeded(pController);
            if (S4MLInstructions !== '') {
                S4MLInstructions = S4MLInstructions.split('\n');

                console.log('instruction S4ML -->' + S4MLInstructions[0]);
                console.log('Given S4ML -->' + S4MLGivenStatements[0]);
                let nerdamerInstructions = S4MLInstructions.map((S4MLInstruction) => this.outputScreen.translater.S4MLToNerdamer(S4MLInstruction));
                let nerdamerGivenStatements = S4MLGivenStatements.map((S4MLGivenStatement) => this.outputScreen.translater.S4MLToNerdamer(S4MLGivenStatement));
                console.log('instruction nerdamer -->' + nerdamerInstructions[0]);
                console.log('Given nerdamer -->' + nerdamerGivenStatements[0]);
                let answersArray = pSolver.solveInstructions(nerdamerGivenStatements, nerdamerInstructions);
                this.outputScreen.displaySolutions(S4MLInstructions, answersArray);
            }
        });
    };

    /*
    * ClickAndKeyListener.setLooperEvent():
    * Definition of the loop event so that when we start with the focus on the inputScreen,
    * when we press tab multiples times, it will alternate between the helper screen and the inputScreen.
    * */
    this.setLooperEvent = function () {
        $('button#looper, button#do_solve').focus(() => {
            this.inputScreen.focus();
        })
    };

    /*
    * ClickAndKeyListener.setkeyAndMouseEvents():
    * Set all events definitions of the ClickAndKeyListener object
    * */
    this.setkeyAndMouseEvents = function (pController, pSolver) {
        this.setKeydownEventsToInputScreen(pController);
        this.setKeyupEventsToInputScreen(pController);
        this.setClickSolveButtonEvent(pSolver, pController);
        this.setLooperEvent();
    };
}

function AutoCompletionWidget(pInputScreen) {
    this.jqEl = $('ul#auto_completer');
    this.jqEl.hide(0);

    this.currentKeywordSelectedIndex = 0;
    this.nbKeywords = 0;
    this.isVisible = false;
    this.inputScreen = pInputScreen;

    this.show = function () {
        this.jqEl.fadeIn(100);
    };

    this.hide = function () {
        let that = this;
        this.jqEl.fadeOut(100, function () {
            that.emptyContent();
        })
    };

    this.emptyContent = function () {
        this.jqEl.html('');
        this.nbKeywords = 0;
    };

    this.updateContentAndShow = function (pKwList) {
        this.emptyContent();
        this.nbKeywords = pKwList.length;
        
        if (pKwList.length !== 0) {
            let caretCoords = this.inputScreen.getCaretCoordinates();
            this.jqEl.css({"top":  '' + (caretCoords.top + 30) +'px', "left": '' + (caretCoords.left + 5) + 'px'});
            for (keyword of pKwList) {
                this.jqEl.append($('<li class="">' + keyword + '</li>'));
            }

            if ($('ul#auto_completer li.selected_keyword').length === 0) {
                $('ul#auto_completer li').first().addClass('selected_keyword');
            }
            this.show();
        } else {
            this.hide();
        }
    };

    this.getSelectedLiEl = function () {
        return this.jqEl.find('li.selected_keyword');
    }

    this.getSelectedKeyword = function () {
        return this.getSelectedLiEl().text();
    };

    this.selectNextKeyword = function () {
        let selectedLiEl = this.getSelectedLiEl();
        let nextLiEl = selectedLiEl.next();

        if (nextLiEl.length !== 0) {
            selectedLiEl.removeClass('selected_keyword');
            nextLiEl.addClass('selected_keyword')
        }
    };

    this.selectPreviousKeyword = function () {
        let selectedLiEl = this.getSelectedLiEl();
        let previousLiEl = selectedLiEl.prev();
        if (previousLiEl.length !== 0) {
            selectedLiEl.removeClass('selected_keyword');
            previousLiEl.addClass('selected_keyword')
        }
    }

    /*
     *
     * NEED TO IMPLEMENT FUNCTIONS HERE TO AVOID HEAVY MANAGEMENT IN EVENTS TRUCS
     * 
     * */

}