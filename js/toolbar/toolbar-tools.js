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
    //setStrokeWidth
    curWidth = Number($("#width-select").val())
    console.log(curWidth)
})

$('#font-select').change(() => {
    //setfontpixel
    curFont = $("#font-select").val();
    console.log(curFont)
})

$('#linetype-select').change(() => {
    //setlinetype
    if ($("#linetype-select").val() === 'Dotted'){
        linetype = [5,10]
    }
    else {
        linetype = []
    }
    console.log(linetype)
})

$('#linecap-select').change(() => {
    //setfontpixel
    lineCap = $("#linecap-select").val();
    console.log(lineCap)
})