$('#welcome').click(function(){
    tab = 'welcome'
    $('#icons').css('display', 'none')

    title = 'Welcome To Our Canvas App'
    subtitle = ' - Christine & Thomas - '
    description = 'This is a project that we created together at Xccelerate.<br>Click the tabs above to check out the various tools. Descriptions of how to use each tool will pop up here.'

    setHTML(title,subtitle,description)

    $('#stamps').css('display', 'none')
    $('#slider').css('display', 'none')
    $('#chooseCurve').css('display', 'none')
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
    $("#button-02").addClass('flaticon-transform')
    $("#label-02").html('Transform')
    $("#button-03").addClass('flaticon-eraser')
    $("#label-03").html('Eraser')
    $("#button-04").addClass('flaticon-font')
    $("#label-04").html('Text')
    $("#button-05").addClass('flaticon-fill')
    $("#label-05").html('Paint Bucket')
    $("#button-06").addClass('flaticon-stamp')
    $("#label-06").html('Stamp')

    title = 'Default'
    subtitle = 'Here are some general tools'
    description = 'Click one and let\'s get started!'

    setHTML(title,subtitle,description)

    $('#stamps').css('display', 'none')
    $('#slider').css('display', 'none')
    $('#chooseCurve').css('display', 'none')
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
    $("#button-03").addClass('flaticon-diagonal-line')
    $("#label-03").html('Line')
    $("#button-04").addClass('flaticon-curved-line')
    $("#label-04").html('Arc')
    $("#button-05").addClass('flaticon-curve-line')
    $("#label-05").html('Quadratic')
    $("#button-06").addClass('flaticon-line')
    $("#label-06").html('Bezier')

    title = 'Lines'
    subtitle = 'Here are some line tools'
    description = 'Click one and let\'s get started!'

    setHTML(title,subtitle,description)

    $('#stamps').css('display', 'none')
    $('#slider').css('display', 'none')
    $('#chooseCurve').css('display', 'none')
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
    $("#button-05").addClass('flaticon-star')
    $("#label-05").html('Star')
    $("#button-06").addClass('flaticon-unite')
    $("#label-06").html('Custom')

    title = 'Shapes'
    subtitle = 'Here are some shape tools'
    description = 'Click one and let\'s get started!'

    setHTML(title,subtitle,description)

    $('#stamps').css('display', 'none')
    $('#slider').css('display', 'none')
    $('#chooseCurve').css('display', 'none')
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

    title = 'Filters'
    subtitle = 'Here are some filters'
    description = 'Click one and let\'s get started!'

    setHTML(title,subtitle,description)

    $('#stamps').css('display', 'none')
    $('#slider').css('display', 'none')
    $('#chooseCurve').css('display', 'none')
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
    $("#button-03").addClass('flaticon-floppy-disk')
    $("#label-03").html('Save')
    $("#button-04").addClass('flaticon-zoom-in')
    $("#label-04").html('Zoom In')
    $("#button-05").addClass('flaticon-zoom-out')
    $("#label-05").html('Zoom Out')
    $("#button-06").addClass('flaticon-close')
    $("#label-06").html('Clear')

    title = 'Utilities'
    subtitle = 'Here are some utilities'
    description = 'Click one and let\'s get started!'

    setHTML(title,subtitle,description)

    $('#stamps').css('display', 'none')
    $('#slider').css('display', 'none')
    $('#chooseCurve').css('display', 'none')
})