/******************************************************************************
 * File name: dictLatexToTex.js
 * Define the correspondance between Latex and Tex
 * 
 * requires: None
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


g_helperFunctionsList = [
    "cos(EXPR)",
    "sin(EXPR)",
    "tan(EXPR)",
    "acos(EXPR)",
    "asin(EXPR)",
    "atan(EXPR)",
    "atan2(EXPR)",
    "sec(EXPR)",
    "csc(EXPR)",
    "cot(EXPR)",
    "asec(EXPR)",
    "acsc(EXPR)",
    "acot(EXPR)",
    "cosh(EXPR)",
    "sinh(EXPR)",
    "tanh(EXPR)",
    "sech(EXPR)",
    "csch(EXPR)",
    "coth(EXPR)",
    "acosh(EXPR)",
    "asinh(EXPR)",
    "atanhh(EXPR)",
    "asech(EXPR)",
    "acsch(EXPR)",
    "acoth(EXPR)",
    "sineCardinal(EXPR)",
    "vector(v1, v2, ..., vn)",
    "vectorGet(VECTOR, index)",
    "vectorSet(VECTOR, index, EXPR)",
    "vectorCross(VECTOR1, VECTOR2)",
    "vectorDot(VECTOR1, VECTOR2)",
    "matrix(ROW1,ROW2, ..., ROWn)",
    "matrixIdentity(EXPR)",
    "matrixDet(EXPR)",
    "matrixGet(MATRIX, ROW_indx, COL_indx)",
    "mattrixSet(MATRIX, ROW_indx, COL_indx)",
    "matrixInvert(MATRIX)",
    "matrixTranspose(MATRIX)",
    "matrixGetCol(MATRIX, COL_indx)",
    "matrixGetRow(MATRIX, ROW_indx)",
    "complexPolarform(COMPLEX)",
    "complexRectForm(COMPLEX)",
    "complexMod(COMPLEX)",
    "complexArg(COMPLEX)",
    "complexRe(COMPLEX)",
    "complexIm(COMPLEX)",
    "integral(VAR, EXPR)",
    "dintegral(VAR, start, end, EXPR)",
    "sineIntegral(EXPR)",
    "cosineIntegral(EXPR)",
    "expIntegral(EXPR)",
    "shIntegral(EXPR)",
    "chIntegral(EXPR)",
    "dif(VAR, EXPR)",
    "dif2(VAR, level, EXPR)",
    "pfact(INTEGER)",
    "solv(VAR, EXPR)",
    "ln(EXPR)",
    "lg(BASE, EXPR)",
    "rad(DEGREE_EXPR)",
    "root(LEVEL, EXPR)",
    "min(v1, v2, ..., vn)",
    "max(v1, v2, ..., vn)",
    "abs(EXPR)",
    "floor(EXPR)",
    "ceil(EXPR)",
    "round(EXPR)",
    "simplify(EXPR)",
    "rect(EXPR)",
    "step(EXPR)",
    "squareCompl(VAR, EXPR)",
    "fact(EXPR)",
    "dfact(EXPR)",
    "exp(EXPR)",
    "mod(NB1, NB2)",
    "erf(EXPR)",
    "sign(EXPR)",
    "sqrt(EXPR)",
    "expand(EXPR)",
    "fib(EXPR)",
    "triangular(EXPR)",
    "line([x1, y1], [x2, y2])",
    "continuedFractions(EXPR)",
    "sum(VAR = START, END, EXPR)",
    "dividePolynoms(p1, p2)",
    "factorize(EXPR)",
    "partialFract(VAR, EXPR)",
    "lcm(NBa, NBb)",
    "gcd(NBa, NBb)",
    "roots(POLYNOM)",
    "getCoeffs(VAR, EXPR)",
    "deg(POLYNOM)",
    "solvSys([eq1, eq2, ..., eqn])",
    "LaplaceTransf(TRANSF_VAR, TIME_VAR, EXPR)",
    "invLaplaceTransf(TRANSF_VAR, TIME_VAR, EXPR)",
    "mean(v1, v2, ..., vn)",
    "mode(v1, v2, ..., vn)",
    "median(v1, v2, ..., vn)",
    "lim(VAR -> VAL, EXPRESSION)",
];