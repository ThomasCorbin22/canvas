$('#welcome').click(function(){
    tab = 'welcome'
    $('#icons').css('display', 'none')

    $('#title').html('Welcome To Our Canvas App')
    $('#subtitle').html(' - Christine & Thomas - ')
    $('#howToUse').html('This is a project that we worked on from 20/04/20 until the 28/04/20.<br>Click the tabs above to check out the various tools. Descriptions of how to use each tool will pop up here.')
})

$('#default').click(function(){
    tab = 'default'
    $('#icons').css('display', 'flex')
    $('[id^=button]').removeClass(function (index, css) {
        return (css.match (/\bflaticon\S+/g) || []).join(' '); // removes anything that starts with "flaticon"
    });
    $('[id^=button]').css('display', '')

    $("#button-01").addClass('flaticon-square')
    $("#label-01").html('Select')
    $("#button-02").addClass('flaticon-move')
    $("#label-02").html('Move')
    $("#button-03").addClass('flaticon-eraser')
    $("#label-03").html('Eraser')
    $("#button-04").addClass('flaticon-font')
    $("#label-04").html('Text')
    $("#button-05").addClass('flaticon-scale')
    $("#label-05").html('Scale')
    $("#button-06").addClass('flaticon-stamp')
    $("#label-06").html('Stamp')

    $('#title').html('Default')
    $('#subtitle').html('Here are some general tools')
    $('#howToUse').html('')
})

$('#lines').click(function(){
    tab = 'lines'
    $('#icons').css('display', 'flex')
    $('[id^=button]').removeClass(function (index, css) {
        return (css.match (/\bflaticon\S+/g) || []).join(' '); // removes anything that starts with "page-"
    });
    $('[id^=button]').css('display', '')

    $("#button-01").addClass('flaticon-pen')
    $("#label-01").html('Pencil')
    $("#button-02").addClass('flaticon-paintbrush')
    $("#label-02").html('Brush')
    $("#button-03").addClass('flaticon-pen-tool')
    $("#label-03").html('Pen')
    $("#button-04").addClass('flaticon-diagonal-line')
    $("#label-04").html('Line')
    $("#button-05").addClass('flaticon-curved-line')
    $("#label-05").html('Arc')
    $("#button-06").addClass('flaticon-line')
    $("#label-06").html('Curve')

    $('#title').html('Lines')
    $('#subtitle').html('Here are some line tools')
    $('#howToUse').html('')
})

$('#shapes').click(function(){
    tab = 'shapes'
    $('#icons').css('display', 'flex')
    $('[id^=button]').removeClass(function (index, css) {
        return (css.match (/\bflaticon\S+/g) || []).join(' '); // removes anything that starts with "page-"
    });
    $('[id^=button]').css('display', '')

    $("#button-01").addClass('flaticon-rectangle')
    $("#label-01").html('Rectangle')
    $("#button-02").addClass('flaticon-circle')
    $("#label-02").html('Circle')
    $("#button-03").addClass('flaticon-ellipse')
    $("#label-03").html('Ellipse')
    $("#button-04").addClass('flaticon-yield')
    $("#label-04").html('Polygon')
    $("#button-05").addClass('flaticon-fill')
    $("#label-05").html('Paint Bucket')
    $("#button-06").css('display', 'none')

    $('#title').html('Shapes')
    $('#subtitle').html('Here are some shape tools')
    $('#howToUse').html('')
})

$('#filters').click(function(){
    tab = 'filters'
    $('#icons').css('display', 'flex')
    $('[id^=button]').removeClass(function (index, css) {
        return (css.match (/\bflaticon\S+/g) || []).join(' '); // removes anything that starts with "page-"
    });
    $('[id^=button]').css('display', '')

    $("#button-01").addClass('flaticon-blur')
    $("#label-01").html('Blur')
    $("#button-02").addClass('flaticon-drop')
    $("#label-02").html('Greyscale')
    $("#button-03").addClass('flaticon-image')
    $("#label-03").html('Sepia')
    $("#button-04").addClass('flaticon-change')
    $("#label-04").html('Invert')
    $("#button-05").addClass('flaticon-contrast')
    $("#label-05").html('Contrast')
    $("#button-06").addClass('flaticon-sun')
    $("#label-06").html('Brightness')

    $('#title').html('Filters')
    $('#subtitle').html('Here are some filters')
    $('#howToUse').html('')
})

$('#utilities').click(function(){
    tab = 'utilities'
    $('#icons').css('display', 'flex')
    $('[id^=button]').removeClass(function (index, css) {
        return (css.match (/\bflaticon\S+/g) || []).join(' '); // removes anything that starts with "page-"
    });
    $('[id^=button]').css('display', '')

    $("#button-01").addClass('flaticon-undo')
    $("#label-01").html('Undo')
    $("#button-02").addClass('flaticon-redo')
    $("#label-02").html('Redo')
    $("#button-03").addClass('flaticon-zoom-in')
    $("#label-03").html('Zoom In')
    $("#button-04").addClass('flaticon-zoom-out')
    $("#label-04").html('Zoom Out')
    $("#button-05").addClass('flaticon-floppy-disk')
    $("#label-05").html('Save')
    $("#button-06").addClass('flaticon-close')
    $("#label-06").html('Clear')

    $('#title').html('Utilities')
    $('#subtitle').html('Here are some utilities')
    $('#howToUse').html('')
})