$(function () {
    $('textarea#input').focus();

    $('button#do_solve').click(() => {
        $('section#output').text('Solution')
    });

    $('button#looper').focus(() => {
        $('textarea#input').focus();
    });

});