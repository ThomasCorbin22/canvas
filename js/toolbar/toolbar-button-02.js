$('#button-02').click(() => {
    if (tab === 'default'){
        // Transform
        currentFunction = new DrawingTransform(contextReal,contextDraft,contextSelect);

        setPoints(selectX, selectY, selectWidth, selectHeight)
        drawRectBoundry()

        title = 'Transform'
        subtitle = 'Use this to move things on the page'
        description = 'Click once on the red boxes to start scaling or moving in that direction, move your mouse to where you want to scale / move your selection and click again to finish.</p><p>If nothing is selected then the whole canvas will be scaled / moved.</p><p>Press ESC or ENTER to finish scaling the selection.'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'lines'){
        // Brush
        currentFunction = new DrawingBrushLine(contextReal,contextDraft);

        title = 'Brush'
        subtitle = 'Draw in a bit more of a fancy way!'
        description = 'Click the mouse down and drag to continuously draw freehand.</p><p>Press ESC or ENTER if you want to cancel the drawing.'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'shapes'){
        // Circle
        currentFunction = new DrawingCircle(contextReal,contextDraft);

        title = 'Circle'
        subtitle = 'Draw a circle with a stroke and a fill'
        description = 'Click once to create a starting point, move your mouse to size the radius of the circle and then click again to finish the circle.</p><p>Press ESC or ENTER if you want to quit the tool.'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'filters'){
        // Greyscale
        currentFunction = new DrawingGreyscale(contextReal,contextDraft);

        title = 'Greyscale'
        subtitle = 'Be trendy and turn it black and white!'
        description = 'Click on the page once and your image will be set to greyscale. Select how much greyscale you want with the slider below.</p><p>0 is no greyscale at all and 1 will be a complete greyscale image.'

        $('#slider').css('display', 'flex')
        $('#customRange').attr('max', '1')
        $('#customRange').attr('step', '0.1')
        $('#customRange').val('1')
        $('.valueSpan2').html('1');
        sliderNum = 1
        
        $('#stamps').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'utilities'){
        // Redo
        currentFunction = new DrawingRedo(contextReal, contextDraft);

        title = 'Redo'
        subtitle = 'I reckon you nailed it the first time'
        description = 'Click on the page once and you will go forward a step, keep clicking to keep going forward.'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }

    setHTML(title,subtitle,description)

});