/******************************************************************************
 * File name: dictS4MLToTex.js
 * Define the correspondance between S4M Language and Tex
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



function DictS4MLToTex() {
    this.value = {
        'given': '♮ [Given] ♮',
        'arccos\\(': '\\arccos(',
        'arcsin\\(': '\\arcsin(',
        'arctan\\(': '\\arctan(',
        'acos\\(': '\\acos(',
        'end': '♮ [End] ♮',
        '^cos': '\\cos',
        '[^a]cos': '\\cos',
        'sin': '\\sin',
        'tan': '\\tan',
        'pfact\\(': '\\pfact(',
        'rad\\(': '\\rad(',
        'solve\\((.+?), (.+?)\\)': '\\solve($1 ∋ $2)',
        'permut\\(([^()]+?)\\)': 'P_$1',
        'arrange\\(([^()]+?), ([^()]+?)\\)': 'A(\\table $2; $1)',
        'combi\\(([^()]+?), ([^()]+?)\\)': 'C(\\table $2; $1)',
        '(.) = function\\((.+?) -> (.+?), (.+?) -> (.+?)\\)': '$1 = (\\text"[App]: " $2 → $3 |  $4 → $5)',
        'alpha': 'α',
         'beta': 'β',
        'Gamma': 'Γ',
        'gamma': 'γ',
        'Delta': '∆',
        'delta': 'δ',
        'epsilon': 'ε',
        'upsilon': 'υ',
        'zeta': 'ζ',
        'Theta': 'Θ',
        'theta': 'θ',
        'iota': 'ι',
        'kappa': 'κ',
        'Lambda': 'Λ',
        'lambda': 'λ',
        'eta': 'η',
        'Ksi': 'Ξ',
        'ksi': 'ξ',
        //'Pi': '∏',
        'Pi': 'π',
        'pi': 'π',
        'Sigma': '∑',
        'sigma': 'σ',
        'Phi': 'Φ',
        'phi': 'φ',
        'Psi': 'Ψ',
        'psi': 'ψ',
        'Omega': 'Ω',
        'omega': 'ω',
        'mu': 'μ',
        'nu': 'ν',
        'rho': 'ρ',
        'tau': 'τ',
        'khi': 'χ',
        '<=>': '⇔',
        '==>': '⇒',
        '<->': '⇌',
        '>=': '≥',
        '<=': '≤',
        'dron': '∂',
        'vgrad': '∇↖{→}',
        'grad': '∇',
        'infinity': '∞',
        'vect\\(([^()]+?)\\)': '{$1}↖{→}',
        'root_(.+?)\\(([^()]+?)\\)': '√^{$1}{$2}',
        'root\\((.+)\\)': '√{$1}',
        '!-C': '∉',
        '-C': '∈',
        'degrees': '°',
        'Xcart': '×',
        '\\|C': 'ℂ',
        '\\|H': 'ℍ',
        '\\|N': 'ℕ',
        '\\|P': 'ℙ',
        '\\|Q': 'ℚ',
        '\\|R': 'ℝ',
        '\\|Z': 'ℤ',
        '\\|O': '∅',
        'abs\\((.+)\\)': '\\|$1\\|',
        '([ℂℍℕℙℚℝℤ])([\\+\\-\\*]+)': '$1^{$2}',
        '([ℂℍℕℙℚℝℤ])([0-9]+)': '$1^{$2}',
        'forall': '∀',
        '!iexist': '∄',
        'iexist': '∃',
        'sd': '∋',
        'not': '¬',
        'and': '∧',
        'xor': '⊕',
        'or': '∨',
        'integral\\((.+?), (.+?), (.+)\\)': '∫↙{$1}↖{$2}{$3}',
        '2integral': '∬',
        '3integral': '∭',
        'lim\\((.+?), (.+)\\)': '{lim}↙{$1}({$2})',
        'reunion\\((.+?)\\)': '⋃↙{$1}',
        'reinter\\((.+?)\\)': '⋂↙{$1}',
        'inter': '∩',
        'union': '∪',
        'included!=': '⊂',
        '!included!=': '⊄',
        'included': '⊆',
        '!included': '⊈',
        '\\+-': '±',
        '===': '≣',
        '!==': '≢',
        'sum\\((.+?), (.+?), (.+?)\\)': '∑↙{$1}↖{$2}($3)',
        'product\\((.+?), (.+?), (.+?)\\)': '∏↙{$1}↖{$2}($3)',
        'exp\\((.+?)\\)': 'e^{$1}',
        '!=': '≠',
        '~~~': '≋ ',
        '~~': '≈',
        '=\\?': '≟',
        '->': '→',
        '\\|([A-Z])([0-9]+)': '$1^$2',
        'integrate\\((.+?), (.+?)\\)': '∫({$2})d$1 = ∫_{a}^{$1}(f(t))\\dt',
        'diff\\((.+?), (.+?), (.+?)\\)': '\\d^{$3}/{\\d$1^{$3}} ({$2})',
        'diff\\((.+?), (.+?)\\)': '\\d/{\\d$1} ({$2})',
        'ln\\(': '\\ln(',
        'log([^(]+)\\(': '\\log_{$1}(',
        '([A-Za-z0-9]) ([A-Za-z0-9])': '$1.$2',
    };
}