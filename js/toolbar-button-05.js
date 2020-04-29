$('#button-05').click(() => {
    if (tab === 'default'){
        // Scale
        currentFunction = new DrawingScale(contextReal,contextDraft, contextSelect);

        setPoints(selectX, selectY, selectWidth, selectHeight)
        drawRectBoundry()

        $('#title').html('Scale')
        $('#subtitle').html('Transform as your heart desires')
        $('#howToUse').html('Click on one of the red boxes to start scaling in that direction, move your mouse to where you want to scale your selection.</p><p>If nothing is selected then the whole canvas will be scaled</p><p>Press ESC or ENTER to finish scaling the selection.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'lines'){
        // Arc
        currentFunction = new DrawingArc(contextReal,contextDraft);

        $('#title').html('Arc')
        $('#subtitle').html('Make a consistent arc')
        $('#howToUse').html('Click once to make a reference point, click once more to set the control point of the arc and then click again to create the arc. Straight lines will be extended from the reference points where no perfect arc can be made.</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'shapes'){
        // Paint Bucket
        currentFunction = new DrawingFillBucket(contextReal,contextDraft);

        $('#title').html('Fill Bucket')
        $('#subtitle').html('Flood the space with whatever colour you want')
        $('#howToUse').html('Click once within a space to fill it will the colour selected in your \'Fill Selection\'. Look at the bottom left of the screen to see your current colour.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'filters'){
        // Contrast
        currentFunction = new DrawingContrast(contextReal,contextDraft);

        $('#title').html('Contrast')
        $('#subtitle').html('Up the contrast a little')
        $('#howToUse').html('Click on the page once and the contrast in your image will increase. Select how much contrast you want with the slider below.</p><p>1 will cause no contrast change and 2 will be a significant deviation.')
        
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

        $('#title').html('Zoom Out')
        $('#subtitle').html('Let\'s get back to a normal scale')
        $('#howToUse').html('Click on the page once and you will zoom back to a regular scale if you have zoomed in with the \'Zoom In\' tool')

        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
});