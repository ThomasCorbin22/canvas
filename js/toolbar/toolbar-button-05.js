$('#button-05').click(() => {
    if (tab === 'default'){
        // Paint Bucket
        currentFunction = new DrawingFillBucket(contextReal,contextDraft);

        title = 'Fill Bucket'
        subtitle = 'Flood the space with whatever colour you want'
        description = 'Click once within a space to fill it will the colour selected in your \'Fill Selection\'. Look at the bottom left of the screen to see your current colour.'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'lines'){
        // Quadratic
        currentFunction = new DrawingQuadratic(contextReal,contextDraft);
    
        title = 'Quadratic'
        subtitle = 'Use a single control point to create a curve.'
        description = 'Click once to make a reference point, click once more to set the end point and then click again to set the control point.</p><p>Press ESC or ENTER if you want to quit the tool.'

        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
    }
    else if (tab === 'shapes'){
        // Star
        currentFunction = new DrawingStar(contextReal,contextDraft);

        title = 'Star'
        subtitle = 'Draw a star with any number of points'
        description = 'Click once to create a starting point, move your mouse to size the radius of the star and then click. Click once more to set the inset of the star.</p><p>Press ESC or ENTER if you want to quit the tool.</p><p>Select below how many points you want you star to have:'
        
        $('#slider').css('display', 'flex')
        $('#customRange').attr('min', '3')
        $('#customRange').attr('max', '12')
        $('#customRange').attr('step', '1')
        $('#customRange').val('6')
        $('.valueSpan2').html('6');
        sliderNum = 6
        
        $('#stamps').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'filters'){
        // Contrast
        currentFunction = new DrawingContrast(contextReal,contextDraft);

        title = 'Contrast'
        subtitle = 'Up the contrast a little'
        description = 'Click on the page once and the contrast in your image will increase. Select how much contrast you want with the slider below.</p><p>1 will cause no contrast change and 2 will be a significant deviation.'
        
        $('#slider').css('display', 'flex')
        $('#customRange').attr('min', '1')
        $('#customRange').attr('max', '2')
        $('#customRange').attr('step', '0.1')
        $('#customRange').val('1.5')
        $('.valueSpan2').html('1.5');
        sliderNum = 1.5
        
        $('#stamps').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'utilities'){
        // Zoom Out
        currentFunction = new DrawingZoomOut(contextReal,contextDraft);

        title = 'Zoom Out'
        subtitle = 'Let\'s get back to a normal scale'
        description = 'Click on the page once and you will zoom back to a regular scale if you have zoomed in with the \'Zoom In\' tool'

        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    
    setHTML(title,subtitle,description)

});