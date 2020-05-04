$('#button-06').click(() => {
    if (tab === 'default'){
        // Stamp
        currentFunction = new DrawingStamp(contextReal,contextDraft);
        drawing = true

        title = 'Stamp'
        subtitle = 'Get some pretty pictures in your work'
        description = 'Every click will create a new stamp. Press ESC or ENTER to finish.</p><p>You can select your stamp or set the size of the stamp below:'
        
        $('#stamps').css('display', 'flex')

        $('#slider').css('display', 'flex')
        $('#customRange').val('1')
        $('#customRange').attr('min', '0.5')
        $('#customRange').attr('max', '5')
        $('#customRange').attr('step', '0.5')

        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'lines'){
        // Curve
        currentFunction = new DrawingBezier(contextReal,contextDraft);

        title = 'Curve'
        subtitle = 'Do you want a bezier or a quadratic?'
        description = 'Click one of the buttons below:'

        $('#chooseCurve').css('display', 'block')

        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
    }
    else if (tab === 'filters'){
        // Brightness
        currentFunction = new DrawingBrightness(contextReal,contextDraft);

        title = 'Brightness'
        subtitle = 'Make the image a little brighter'
        description = 'Click on the page once and the bright in your image will change. Select how much you want the brightness to change with the slider below.</p><p>-255 will set the image to black and +255 will set the image to white.'
        
        $('#slider').css('display', 'flex')
        $('#customRange').attr('min', '-255')
        $('#customRange').attr('max', '255')
        $('#customRange').attr('step', '5')
        $('#customRange').val('0')
        $('.valueSpan2').html('0');
        sliderNum = 0

        $('#stamps').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'utilities'){
        // Clear
        currentFunction = new DrawingClear(contextReal,contextDraft);

        title = 'Clear'
        subtitle = 'Clear the canvas and start from scratch'
        description = 'Click on the image to clear it.'

        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }

    setHTML(title,subtitle,description)

});