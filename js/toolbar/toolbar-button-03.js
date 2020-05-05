$('#button-03').click(() => {
    if (tab === 'default'){
        // Eraser
        currentFunction = new DrawingEraser(contextReal,contextDraft,contextSelect);

        title = 'Eraser'
        subtitle = 'Rub out any mistakes you\'ve made'
        description = 'Click the mouse down and drag to continuously erase by freehand.</p><p>Press ESC or ENTER if you want to cancel what you have erased so far.'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'lines'){
        // Straight Line
        currentFunction = new DrawingStraightLine(contextReal,contextDraft);

        title = 'Line'
        subtitle = 'Draw a straight line'
        description = 'Click once to create a starting point, move your mouse to the end of the line and then click again to finish the line.</p><p>Press ESC or ENTER if you want to quit the tool.'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'shapes'){
        // Circle
        currentFunction = new DrawingOval(contextReal,contextDraft);

        title = 'Ellipse'
        subtitle = 'Draw an ellipse with a stroke and a fill'
        description = 'Click once to create a starting point, move your mouse to size the first radius of the ellipse and click to set it. Move your mouse again to size then second radius and then click again to finish the ellipse.</p><p>Press ESC or ENTER if you want to quit the tool.'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'filters'){
        // Sepia
        currentFunction = new DrawingSepia(contextReal,contextDraft);

        title = 'Sepia'
        subtitle = 'Go retro with Sepia'
        description = 'Click on the page once and your image will be set to sepia. Select how much sepia you want with the slider below.</p><p>0 is no greyscale at all and 1 will be a complete sepia image.'
        
        $('#slider').css('display', 'flex')
        $('#customRange').attr('min', '0')
        $('#customRange').attr('max', '1')
        $('#customRange').attr('step', '0.1')
        $('#customRange').val('1')
        $('.valueSpan2').html('1');
        sliderNum = 1
        
        $('#stamps').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'utilities'){
        // Save
        currentFunction = new DrawingSave(contextReal,contextDraft);

        title = 'Save'
        subtitle = 'Save your work to your computer'
        description = 'Click on the image to save it to your computer.'

        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }

    setHTML(title,subtitle,description)

});