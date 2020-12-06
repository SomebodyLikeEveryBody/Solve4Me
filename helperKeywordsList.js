    /******************************************************************************
 * File name: helperFunctionList.js
 * Contain the helper informations to display in the helper screen.
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


function HelperKeywordsList() {
    this.value = [
        { 
            keyword: "cos(EXPR)", 
            explanation: "Returns the cosine value of the expression",
        },
        { 
            keyword: "sin(EXPR)", 
            explanation: "Returns the sine value of the expression",
        },
        { 
            keyword: "tan(EXPR)", 
            explanation: "Returns the tangent value of the expression",
        },
        { 
            keyword: "acos(EXPR)", 
            explanation: "Returns the arc-cosine value of the expression",
        },
        { 
            keyword: "asin(EXPR)", 
            explanation: "Returns the arc-sine value of the expression",
        },
        { 
            keyword: "atan(EXPR)", 
            explanation: "Returns the arc tangent value of the expression",
        },
        { 
            keyword: "atan2(EXPR)", 
            explanation: "Returns the four-quadrant inverse of tangent",
        },
        { 
            keyword: "sec(EXPR)", 
            explanation: "Returns the secant value of the expression",
        },
        { 
            keyword: "cosec(EXPR)",
            explanation: "Returns the cosecant value of the expression",
        },
        { 
            keyword: "cotan(EXPR)",
            explanation: "Returns the cotangent value of the expression",
        },
        { 
            keyword: "asec(EXPR)",
            explanation: "Returns the arc-secant value of the expression",
        },
        { 
            keyword: "acosec(EXPR)",
            explanation: "Returns the arc-cosecant value of the expression",
        },
        { 
            keyword: "acotan(EXPR)",
            explanation: "Returns the arc-cotangent value of the expression",
        },
        { 
            keyword: "cosh(EXPR)",
            explanation: "Returns the hyperbolic cosine value of the expression",
        },
        { 
            keyword: "sinh(EXPR)",
            explanation: "Returns the hyperbolic sine value of the expression",
        },
        { 
            keyword: "tanh(EXPR)",
            explanation: "Returns the hyperbolic tangent value of the expression",
        },
        { 
            keyword: "sech(EXPR)",
            explanation: "Returns the hyperbolic secant value of the expression",
        },
        { 
            keyword: "cosech(EXPR)",
            explanation: "Returns the hyperbolic cosecant value of the expression",
        },
        { 
            keyword: "cotanh(EXPR)",
            explanation: "Returns the hyperbolic cotangent value of the expression",
        },
        { 
            keyword: "acosh(EXPR)", 
            explanation: "Returns the hyperbolic arc-cosine value of the expression",
        },
        { 
            keyword: "asinh(EXPR)", 
            explanation: "Returns the hyperbolic arc-sine value of the expression",
        },
        { 
            keyword: "atanh(EXPR)", 
            explanation: "Returns the hyperbolic arc-tangent value of the expression",
        },
        { 
            keyword: "asech(EXPR)", 
            explanation: "Returns the hyperbolic arc-secant value of the expression",
        },
        { 
            keyword: "acosech(EXPR)", 
            explanation: "Returns the hyperbolic arc-cosecant value of the expression",
        },
        { 
            keyword: "acoth(EXPR)", 
            explanation: "Returns the hyperbolic arc-cotangent value of the expression",
        },
        { 
            keyword: "sineCardinal(EXPR)",
            explanation: "Returns the cardinal sine value of the expression",
        },
        { 
            keyword: "vector(v1, v2, ..., vn)", 
            explanation: "Returns the vector with coords v1, v2, ..., vn", 
        },
        { 
            keyword: "vectorGet(VECTOR, index)", 
            explanation: "Returns the coord of the vector at the given index", 
        },
        { 
            keyword: "vectorSet(VECTOR, index, EXPR)",
            explanation: "Modifies the vector's coord at the given index",
        },
        { 
            keyword: "vectorCross(VECTOR1, VECTOR2)",
            explanation: "Returns the cross product of the 2 vectors",
        },
        { 
            keyword: "vectorDot(VECTOR1, VECTOR2)",
            explanation: "Returns the dot product of the 2 vectors",
        },
        { 
            keyword: "matrix(ROW1,ROW2, ..., ROWn)",
            explanation: "Returns the matrix with coords vectors Row1, Row2, ..., Rown", 
        },
        { 
            keyword: "matrixIdentity(MATRIX)", 
            explanation: "Returns an Identity matrix of dimensions n x n",
        },
        { 
            keyword: "matrixDet(MATRIX)", 
            explanation: "Returns the determinant of the matrix", 
        },
        { 
            keyword: "matrixGet(MATRIX, ROW_indx, COL_indx)",
            explanation: "Returns the value contained in the given coords",
        },
        { 
            keyword: "mattrixSet(MATRIX, ROW_indx, COL_indx)",
            explanation: "Modifies the value contained in the given coords",
        },
        { 
            keyword: "matrixInvert(MATRIX)",
            explanation: "Returns the inverted matrix of the given matrix",
        },
        { 
            keyword: "matrixTranspose(MATRIX)",
            explanation: "Returns the transposed matrix",
        },
        { 
            keyword: "matrixGetCol(MATRIX, COL_indx)",
            explanation: "Returns the specified column of the matrix as a vector",
        },
        { 
            keyword: "matrixGetRow(MATRIX, ROW_indx)",
            explanation: "Returns the specified row of the matrix as a vector",
        },
        { 
            keyword: "complexPolarform(COMPLEX)",
            explanation: "Returns the polar form of the complex number",
        },
        { 
            keyword: "complexRectForm(COMPLEX)",
            explanation: "Returns the rectangular form of the complex number",
        },
        { 
            keyword: "complexMod(COMPLEX)",
            explanation: "Returns the module of the complex number",
        },
        { 
            keyword: "complexArg(COMPLEX)",
            explanation: "Returns the argument of the complex number",
        },
        { 
            keyword: "complexRe(COMPLEX)",
            explanation: "Returns the real part of the complex number", 
        },
        { 
            keyword: "complexIm(COMPLEX)",
            explanation: "Returns the imaginary part of the complex numbers",
        },
        { 
            keyword: "integral(VAR, EXPR)",
            explanation: "Returns the undefined integral of the expression with respect to VAR",
        },
        { 
            keyword: "dintegral(VAR, start, end, EXPR)",
            explanation: "Returns the defined integral of the expression from the given start to end with respect to VAR",
        },
        { 
            keyword: "sineIntegral(EXPR)",
            explanation: "Returns the sine integral of the expression",
        },
        { 
            keyword: "cosineIntegral(EXPR)",
            explanation: "Returns the cosine integral of the expression",
        },
        { 
            keyword: "expIntegral(EXPR)",
            explanation: "Returns the exponential integral of the expression",
        },
        { 
            keyword: "shIntegral(EXPR)",
            explanation: "Returns the hyperbolic sine integral of the expression",
        },
        { 
            keyword: "chIntegral(EXPR)",
            explanation: "Returns the hypebolic cosine integral of the expression",
        },
        { 
            keyword: "dif(VAR, EXPR)",
            explanation: "Returns the derivative expression of the given expression with respect to VAR",
        },
        { 
            keyword: "difn(VAR, level, EXPR)", 
            explanation: "Returns the level-th derivative expression of the given expression with respect to VAR",
        },
        { 
            keyword: "pfact(INTEGER)", 
            explanation: "Returns the prime factor decomposition of the given integer",
        },
        { 
            keyword: "solv(VAR, EQUATION)", 
            explanation: "Returns the possible values of VAR given the equation",
        },
        { 
            keyword: "ln(EXPR)",
            explanation: "Returns the natural logarithm value of the expression",
        },
        { 
            keyword: "lg(BASE, EXPR)", 
            explanation: "Returns the base BASE logarithm value of the expression",
        },
        {
            keyword: "rad(DEGREE_EXPR)",
            explanation: "Returns the radian value of the given degree value",
        },
        {
            keyword: "root(LEVEL, EXPR)",
            explanation: "Returns the roots of the given polynom",
        },
        {
            keyword: "min(v1, v2, ..., vn)",
            explanation: "Returns the minimal value of the values in the given list",
        },
        {
            keyword: "max(v1, v2, ..., vn)",
            explanation: "Returns the maximal value of the values in the given list",
        },
        {
            keyword: "abs(EXPR)", 
            explanation: "Returns the absolute value of the given expression", 
        },
        { 
            keyword: "floor(EXPR)",
            explanation: "Returns the floor's expression's value",
        },
        { 
            keyword: "ceil(EXPR)",
            explanation: "Returns the ceil's expression's value",
        },
        { 
            keyword: "round(EXPR)", 
            explanation: "Returns the round's expression's value",
        },
        { 
            keyword: "simplify(EXPR)", 
            explanation: "Returns the expression with a simplified scripture",
        },
        { 
            keyword: "rect(EXPR)", 
            explanation: "Returns the rect() value of the expression",
        },
        {
            keyword: "step(EXPR)", 
            explanation: "Returns the step() value of the expression",
        },
        { 
            keyword: "squareCompl(VAR, EXPR)", 
            explanation: "Returns the square completion of the expression with respect to VAR", 
        },
        { 
            keyword: "fact(EXPR)", 
            explanation: "Returns the factorial value of the expression", 
        },
        { 
            keyword: "dfact(EXPR)", 
            explanation: "Returns the double factorial value of the expression",
        },
        { 
            keyword: "exp(EXPR)", 
            explanation: "Returns the exponential value of the expression",
        },
        { 
            keyword: "mod(NB1, NB2)", 
            explanation: "Returns NB1 modulo NB2, equivalent to NB1 % NB2",
        },
        { 
            keyword: "erf(EXPR)", 
            explanation: "Returns the erf() value of the expression",
        },
        { 
            keyword: "sign(EXPR)", 
            explanation: "Returns the sign of the expression",
        },
        { 
            keyword: "sqrt(EXPR)", 
            explanation: "Returns the square root of the expression",
        },
        { 
            keyword: "expand(EXPR)", 
            explanation: "Returns the expanded scripture of the expression",
        },
        { 
            keyword: "fib(EXPR)", 
            explanation: "Returns the fibonacci value of the expression",
        },
        { 
            keyword: "triangular(EXPR)", 
            explanation: "Returns the triangular() value of the expression",
        },
        { 
            keyword: "line([x1, y1], [x2, y2])", 
            explanation: "Returns the equation of the line crossing the 2 given points",
        },
        { 
            keyword: "continuedFractions(EXPR)", 
            explanation: "Returns the expression as a continued fraction (a + b / (c + d / e  + f / g + ...))",
        },
        { 
            keyword: "sum(VAR = START, END, EXPR)", 
            explanation: "Returns the sum value of the expression for i = START to i = END",
        },
        { 
            keyword: "dividePolynoms(p1, p2)", 
            explanation: "Returns the result of the division of the 2 given polynoms",
        },
        { 
            keyword: "factorize(EXPR)",
            explanation: "Returns the factorisations scripture of the expression",
        },
        { 
            keyword: "partialFract(VAR, EXPR)", 
            explanation: "Returns the expression under a sum of partial fractions if it is possible", 
        },
        { 
            keyword: "lcm(NBa, NBb)",
            explanation: "Returns the lcm of the 2 given numbers",
        },
        { 
            keyword: "gcd(NBa, NBb)", 
            explanation: "Returns the gcd of the 2 given numbers",
        },
        { 
            keyword: "roots(POLYNOM)", 
            explanation: "Returns the roots of the given polynoms", 
        },
        { 
            keyword: "getCoeffs(VAR, EXPR)", 
            explanation: "Returns the coefficients of the given expression / polynom", 
        },
        { 
            keyword: "deg(POLYNOM)",
            explanation: "Returns the degree of the given polynom",
        },
        { 
            keyword: "solvSys([eq1, eq2, ..., eqn])",
            explanation: "Returns the solutions of the equation system", 
        },
        { 
            keyword: "LaplaceTransf(TRANSF_VAR, TIME_VAR, EXPR)",
            explanation: "Returns the Laplace transformation of the expression",
        },
        { 
            keyword: "invLaplaceTransf(TRANSF_VAR, TIME_VAR, EXPR)", 
            explanation: "Returns the inverse Laplace transformation of the expression",
        },
        { 
            keyword: "aAverage([v1, v2, ..., vn])",
            explanation: "Returns the arithmetic average of the given values",
        },
        { 
            keyword: "gAverage([v1, v2, ..., vn])",
            explanation: "Returns the geometric average of the given values",
        },
        { 
            keyword: "mode([v1, v2, ..., vn])",
            explanation: "Returns the mode value of the given values",
        },
        { 
            keyword: "median([v1, v2, ..., vn])",
            explanation: "Returns the median value of the given values",
        },
        { 
            keyword: "lim(VAR -> VAL, EXPRESSION)",
            explanation: "Returns the limit of the given expression expression",
        },
        { 
            keyword: "Infinity",
            explanation: "Keyword to designate the INFINITY concept",
        },
        { 
            keyword: "uPoiseuille",
            explanation: "Poiseuille unity",
        },
        { 
            keyword: "alpha",
            explanation: "Pascal Unity",
        },
        { 
            keyword: "beta",
            explanation: "Pascal Unity",
        },
        { 
            keyword: "gamma",
            explanation: "Pascal Unity",
        },
        { 
            keyword: "Gamma",
            explanation: "Pascal Unity",
        },
        { 
            keyword: "delta",
            explanation: "Pascal Unity",
        },
        { 
            keyword: "Delta",
            explanation: "Pascal Unity",
        },
        { 
            keyword: "epsilon",
            explanation: "Pascal Unity",
        },
        { 
            keyword: "upsilon",
            explanation: "Pascal Unity",
        },
    ];
};