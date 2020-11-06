
/*
 * textToMathML():
 * Takes a string and return a <math> DOM object corresponding to the expression
 * Uses the M.sToMathE() function in jqmath.js
 * */
function texToMathML(pTexStr) {
    return (M.sToMathE(pTexStr, true));
}

function getAllStatements(pStr)
{
    return pStr.split('\n')
}

/*
 * MAIN
 * */
$(function () {
    $('textarea#input').focus();

    $('button#do_solve').click(() => {
        if ($('textarea#input').val() !== '') {
            $('section#output').html('');

            let statements = getAllStatements($('textarea#input').val());
            let appened_element = null;
            for (statement of statements) {
                appened_element = $('<div class="formula"></div>');
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