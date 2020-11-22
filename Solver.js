/******************************************************************************
 * File name: Solver.js
 * Manage the vue problematics and solving problematics.
 * The solving problematic will in the near future be in a specific file
 * 
 * requires: ./libs/nerdamer/nerdamer.core.js"></script>
 *           ./libs/nerdamer/nerdamer.core.js"></script>
 *           ./libs/nerdamer/Algebra.js"></script>
 *           ./libs/nerdamer/Calculus.js"></script>
 *           ./libs/nerdamer/Solve.js"></script>
 *           ./libs/nerdamer/Extra.js"></script>
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



/*******************************************************************************************
* Solver:
* Object that manages the solving feature, heart of all this.
* */
function Solver() {
    this.NerdamerCore = nerdamer.getCore();
    this.nerdamerParser = this.NerdamerCore.PARSER;

    this.init = function () {
        this.defineNewFunctionsToNerdamer();
        this.setSettings();
    }

    this.solveInstruction = function (pExpression) {
        let retAnswer = '';
        let tempEvaluation = '';
        let tempDecimals = '';
        let tempResult = '';

        try {
            tempResult = nerdamer(pExpression)
            tempResultStr = tempResult.toString();
            tempEvaluation = nerdamer(tempResultStr).evaluate().toString();
            tempDecimals = nerdamer(tempEvaluation).text('decimals');

            console.log('resulat nerdamer -->' + tempResultStr);
            if ((tempResultStr != pExpression) 
                || (tempResultStr === tempEvaluation && tempResultStr === tempDecimals)) {
                retAnswer += ' = ' + nerdamer.convertToLaTeX(tempResultStr) + ';';
            }
            if (tempResultStr !== tempEvaluation) {
               retAnswer += ' = ' + nerdamer.convertToLaTeX(tempEvaluation) + ';';
            }

            if (tempEvaluation !== tempDecimals) {
               retAnswer += ' = ' + tempDecimals.replace(/\*/g, '\.') + ';';
            }
        } catch (e) {
            retAnswer = '"[' + e.name + ']: ' + e.message + '"';
            console.log(e)
        }

        return retAnswer;
    };

    this.setGivenVars = function (pArrayGivenStatements) {
        let tempVarDef = '';
        let counter = 1;
        let retBool = true;
        for (givenStatement of pArrayGivenStatements) {
            if (givenStatement.includes('=')) {
                tempVarDef = givenStatement.split('=');
                tempVarDef = tempVarDef.map((el) => el.trim());

                console.log(tempVarDef);
                try {
                    nerdamer.setVar(tempVarDef[0], tempVarDef[1]);
                } catch (e) {
                    window.alert('[Error in Given Statements N.[' + counter + ']\'s syntax]: \n\n' + e.name + '\n' + e.message)
                    retBool = false;
                }
            }

            counter++;
        }

        return retBool;
    }

    this.clearVars = function () {
        nerdamer.clearVars();
    }

    this.setSettings = function () {
        nerdamer.set('integration_depth', '30')
        nerdamer.set('SYMBOLIC_MIN_MAX', 'true')
    }

    this.setDefaultVars = function () {
        nerdamer.setVar('uPa', 'kg * (m^-1) * (s^-2)');
        nerdamer.setVar('uPoiseuille', 'kg * (m^-1) * (s^-1)');
    }

    this.solveInstructions = function (pArrayGivenStatements, pArrayInstructions) {
        let retArray = [];

        this.clearVars();
        this.setDefaultVars();
        
        if (this.setGivenVars(pArrayGivenStatements)) {
            for (const instruction of pArrayInstructions) {
                retArray.push(this.solveInstruction(instruction));
            }
        }

        return (retArray);
    };

    this.addFunctionToNerdamer = function (pFunctionName, pNbArgs, pFunctionPtr, pHandlerFuncPtr) {
        this.NerdamerCore.Math2[pFunctionName] = pFunctionPtr;
        this.nerdamerParser.functions[pFunctionName] = [pHandlerFuncPtr, pNbArgs];
    };

    this.defineNewFunctionsToNerdamer = function () {
        let core = nerdamer.getCore();
        let _ = core.PARSER;

        nerdamer.setFunction('integral', ['var', 'expression'], 'integrate(expression, var)');
        nerdamer.setFunction('dintegral', ['var', 'start', 'end', 'expression'], 'defint(expression, start, end, var)');
        nerdamer.setFunction('dif', ['var', 'expression'], 'diff(expression, var, 1)');
        nerdamer.setFunction('dif2', ['var', 'expression', 'level'], 'diff(expression, var, level)');
        nerdamer.setFunction('pfact', ['var'], 'pfactor(var)');
        nerdamer.setFunction('solv', ['var', 'expression'], 'solve(expression, var)');
        nerdamer.setFunction('ln', ['var'], 'log(var)');
        nerdamer.setFunction('rad', ['var'], 'var * pi / 180');
        nerdamer.setFunction('lg', ['base', 'val'], 'log(val) / log(base)');
        nerdamer.setFunction('root', ['level', 'val'], 'val^(1/level)');

        this.addFunctionToNerdamer('doubler', 1, function (a) {
            return (2 + a);
        }, function (a) {
            let c_a = a.clone();
            return (_.add(new core.Symbol(2), c_a));
        });
    };

    this.init();
}