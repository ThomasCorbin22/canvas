$('#fill-colour').click(() => {
    $('#popup-font-size').removeClass('d-flex')
    $('#popup-linecap-select').removeClass('d-flex')
    $('#popup-linetype-select').removeClass('d-flex')
    $('#popup-line-width').removeClass('d-flex')
});

$('#stroke-colour').click(() => {
    $('#popup-font-size').removeClass('d-flex')
    $('#popup-linecap-select').removeClass('d-flex')
    $('#popup-linetype-select').removeClass('d-flex')
    $('#popup-line-width').removeClass('d-flex')
});

$('#line-width').click(() => {
    $('#popup-font-size').removeClass('d-flex')
    $('#popup-linecap-select').removeClass('d-flex')
    $('#popup-linetype-select').removeClass('d-flex')

    $('#popup-line-width').toggleClass('d-flex')
});

$('#font-size').click(() => {
    $('#popup-line-width').removeClass('d-flex')
    $('#popup-linecap-select').removeClass('d-flex')
    $('#popup-linetype-select').removeClass('d-flex')

    $('#popup-font-size').toggleClass('d-flex')
});

$('#line-cap').click(() => {
    $('#popup-line-width').removeClass('d-flex')
    $('#popup-linetype-select').removeClass('d-flex')
    $('#popup-font-size').removeClass('d-flex')

    $('#popup-linecap-select').toggleClass('d-flex')
});

$('#line-style').click(() => {
    $('#popup-line-width').removeClass('d-flex')
    $('#popup-linecap-select').removeClass('d-flex')
    $('#popup-font-size').removeClass('d-flex')

    $('#popup-linetype-select').toggleClass('d-flex')
});


$('#width-select').change(() => {
    // Set stroke width
    curWidth = Number($("#width-select").val())
})

$('#font-select').change(() => {
    // Set text size
    curFont = $("#font-select").val();
    curFontSize = Number(curFont.split('p')[0])
    $('.text-style').css('font-size', `${curFont.split(' ')[0]}`);
})

$('#linetype-select').change(() => {
    // Set line type
    if ($("#linetype-select").val() === 'Dotted'){
        linetype = [5,10]
    }
    else {
        linetype = []
    }
})

$('#linecap-select').change(() => {
    // Set line cap
    lineCap = $("#linecap-select").val();
})