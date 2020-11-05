$(function () {
    $('textarea#input').focus();

    $('button#do_solve').click(() => {
        if ($('textarea#input').val() !== '') {
            $('section#output').html('<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo stretchy="false">(</mo><mi>&#x3B8;</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy="false">[</mo><munderover><mo data-mjx-texclass="OP">&#x2211;</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mo stretchy="false">(</mo><msub><mi>h</mi><mi>&#x3B8;</mi></msub><mo stretchy="false">(</mo><msup><mi>x</mi><mrow><mo stretchy="false">(</mo><mi>i</mi><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">)</mo><mo>&#x2212;</mo><msup><mi>y</mi><mrow><mo stretchy="false">(</mo><mi>i</mi><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">)</mo><mn>2</mn><mo>+</mo><mi>&#x3BB;</mi><munderover><mo data-mjx-texclass="OP">&#x2211;</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>&#x3B8;</mi><mi>j</mi><mn>2</mn></msubsup></mrow></math>')
        }
    });

    $('button#looper').focus(() => {
        $('textarea#input').focus();
    });

});