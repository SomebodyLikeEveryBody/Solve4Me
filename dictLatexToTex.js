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



function DictLatexToTex() {
    this.value = {
        '(\\[\\*BCKSLSH\\*\\])*alpha': 'α',
        '(\\[\\*BCKSLSH\\*\\])*beta': 'β',
        '(\\[\\*BCKSLSH\\*\\])*Gamma': 'Γ',
        '(\\[\\*BCKSLSH\\*\\])*gamma': 'γ',
        '(\\[\\*BCKSLSH\\*\\])*Delta': '∆',
        '(\\[\\*BCKSLSH\\*\\])*delta': 'δ',
        '(\\[\\*BCKSLSH\\*\\])*epsilon': 'ε',
        '(\\[\\*BCKSLSH\\*\\])*upsilon': 'υ',
        '(\\[\\*BCKSLSH\\*\\])*zeta': 'ζ',
        '(\\[\\*BCKSLSH\\*\\])*Theta': 'Θ',
        '(\\[\\*BCKSLSH\\*\\])*theta': 'θ',
        '(\\[\\*BCKSLSH\\*\\])*iota': 'ι',
        '(\\[\\*BCKSLSH\\*\\])*kappa': 'κ',
        '(\\[\\*BCKSLSH\\*\\])*Lambda': 'Λ',
        '(\\[\\*BCKSLSH\\*\\])*lambda': 'λ',
        '(\\[\\*BCKSLSH\\*\\])*eta': 'η',
        '(\\[\\*BCKSLSH\\*\\])*Ksi': 'Ξ',
        '(\\[\\*BCKSLSH\\*\\])*ksi': 'ξ',
        '(\\[\\*BCKSLSH\\*\\])*PI': '∏',
        '(\\[\\*BCKSLSH\\*\\])*Pi': 'π',
        '(\\[\\*BCKSLSH\\*\\])*Sigma': '∑',
        '(\\[\\*BCKSLSH\\*\\])*sigma': 'σ',
        '(\\[\\*BCKSLSH\\*\\])*Phi': 'Φ',
        '(\\[\\*BCKSLSH\\*\\])*phi': 'φ',
        '(\\[\\*BCKSLSH\\*\\])*Psi': 'Ψ',
        '(\\[\\*BCKSLSH\\*\\])*psi': 'ψ',
        '(\\[\\*BCKSLSH\\*\\])*Omega': 'Ω',
        '(\\[\\*BCKSLSH\\*\\])*omega': 'ω',
        '(\\[\\*BCKSLSH\\*\\])*mu': 'μ',
        '(\\[\\*BCKSLSH\\*\\])*nu': 'ν',
        '(\\[\\*BCKSLSH\\*\\])*rho': 'ρ',
        '(\\[\\*BCKSLSH\\*\\])*tau': 'τ',
        '(\\[\\*BCKSLSH\\*\\])*khi': 'χ',
        '\\[\\*BCKSLSH\\*\\]sum_\\{(.+?)\\}\\^\\{(.+?)\\}\\{(.+?)\\}': '∑↙{$1}↖{$2}($3)',
        '\\[\\*BCKSLSH\\*\\]prod_\\{(.+?)\\}\\^\\{(.+?)\\}\\{(.+?)\\}': '∏↙{$1}↖{$2}($3)',
        '\\[\\*BCKSLSH\\*\\]cdot': '.',
        '\\[\\*BCKSLSH\\*\\]left': '',
        '\\[\\*BCKSLSH\\*\\]right': '',
        '\\[\\*BCKSLSH\\*\\]sqrt': '√',
        '\\[\\*BCKSLSH\\*\\]frac\\{(.+?)\\}\\{(.+?)\\}': '{$1}/{$2}',
        '\\[\\*BCKSLSH\\*\\]mathrm\\{(.+?)\\}': '\\$1',
        '\\[\\*BCKSLSH\\*\\]pi': 'π',
        '\\[\\*BCKSLSH\\*\\]infty': '∞',
        '\\[\\*BCKSLSH\\*\\]table': '\\table',
        '\\[\\*BCKSLSH\\*\\]lim_\\{(.+?)\\[\\*BCKSLSH\\*\\]to(.+?)\\}': '\\lim↙{$1 → $2}',
        'log': 'ln',
        '\\[\\*BCKSLSH\\*\\]int\\[\\*BCKSLSH\\*\\]limits': '∫',
        '\\[\\*BCKSLSH\\*\\]int': '∫',
        '\\[\\*BCKSLSH\\*\\]': '\\',
        'sqrt\\((.+)\\)': '√{$1}'
    };
}