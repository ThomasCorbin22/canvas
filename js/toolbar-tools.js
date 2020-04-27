$('#fill-colour').click(() => {
    $('.flaticon-stop').css('color',$(curFill))
});

$('#stroke-colour').click(() => {
    $('.flaticon-rounded-black-square-shape').css('color', $(curStroke))
});

$('#line-width').click(() => {
    $('#title').html('Line Width Selector')
    $('#subtitle').html('Please select in the dropdown list below:')
    $('#howToUse').html('From Minimum 5px to</br> Maximun 50px</br>By Default is 20px.')
     $('.popup').css('display', 'flex')
    console.log($(curWidth))

    //  if ($('.popup').css === ('display',"none"){
    //$('.popup').css('display') = ("display","block");
    // } else{
    //   $('.popup').css('display') = ("display","none");
    // }
});

$('#font-size').click(() => {
    $('#title').html('Font Size Selector')
    $('#subtitle').html('Please select in the dropdown list below:')
    $('#howToUse').html('You can choose between Small/ Medium and Large font size.')
    $('.popup').css('display', 'flex')
       //  if ($('.popup').css === ('display',"none"){
    //$('.popup').css('display') = ("display","block");
    // } else{
    //   $('.popup').css('display') = ("display","none");
    // }
});

$('#line-cap').click(() => {
    $('#title').html('Line Cap Selector')
    $('#subtitle').html('Please select in the dropdown list below:')
    $('#howToUse').html('With a selection of Round/ Butted and Squared.')
    $('.popup').css('display', 'flex')
       //  if ($('.popup').css === ('display',"none"){
    //$('.popup').css('display') = ("display","block");
    // } else{
    //   $('.popup').css('display') = ("display","none");
    // }
});

$('#line-style').click(() => {
    $('#title').html('Line style Selector')
    $('#subtitle').html('Please select in the dropdown list below:')
    $('#howToUse').html('With a selection of Standard and Dotted Line.')
    $('.popup').css('display', 'flex')
       //  if ($('.popup').css === ('display',"none"){
    //$('.popup').css('display') = ("display","block");
    // } else{
    //   $('.popup').css('display') = ("display","none");
    // }
    
});







$('#width-select').on('input change'), () => {
    //setStrokeWidth
    curWidth = $("#width-select").val();
    console.log($(curWidth))
}

$('#font-size').on('input change'), () => {
    //setfontpixel
    curFont = $("#font-size").val();
    console.log($('#font-size'))
}

$('#font-size').on('input change'), () => {
    //setfontpixel
    curFont = $("#font-size").val();
    console.log($('#font-size'))
}

$('#linecap-select').on('input change'), () => {
    //setlinetype
    if (linetypeselect === 'Dotted'){
        linetype = [5,10]
        console.log('dotted')
    }
    else {
        linetype = []
        console.log('normal')
    }
}