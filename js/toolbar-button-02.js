$('#button-02').click(() => {
    if (tab === 'default'){
        // Move
        currentFunction = new DrawingMove(contextReal,contextDraft,contextSelect);

        points = {
            1: [selectX, selectY],
            2: [selectX + selectWidth / 2, selectY],
            3: [selectX + selectWidth, selectY],
            
            4: [selectX, selectY + selectHeight / 2],
            5: [selectX + selectWidth / 2, selectY + selectHeight / 2],
            6: [selectX + selectWidth, selectY + selectHeight / 2],
            
            7: [selectX, selectY + selectHeight],
            8: [selectX + selectWidth / 2, selectY + selectHeight],
            9: [selectX + selectWidth, selectY + selectHeight]
        }

        drawRectBoundry()

        $('#title').html('Move')
        $('#subtitle').html('Use this to move things on the page')
        $('#howToUse').html('Click once to create a reference point, move your mouse to where you want to move your selection and then click again to finish the selection.</p><p>If nothing is selected then the whole canvas will be moved</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'lines'){
        // Brush
        currentFunction = new DrawingBrushLine(contextReal,contextDraft);

        $('#title').html('Brush')
        $('#subtitle').html('Draw in a bit more of a fancy way!')
        $('#howToUse').html('Click the mouse down and drag to continuously draw freehand.</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'shapes'){
        // Circle
        currentFunction = new DrawingCircle(contextReal,contextDraft);

        $('#title').html('Circle')
        $('#subtitle').html('Draw a circle with a stroke and a fill')
        $('#howToUse').html('Click once to create a starting point, move your mouse to size the radius of the circle and then click again to finish the circle.</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'filters'){
        // Greyscale
        currentFunction = new DrawingGreyscale(contextReal,contextDraft);

        $('#title').html('Greyscale')
        $('#subtitle').html('Be trendy and turn it black and white!')
        $('#howToUse').html('Click on the page once and your image will be set to greyscale. Select how much greyscale you want with the slider below.</p><p>0 is no greyscale at all and 1 will be a complete greyscale image.')

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

        $('#title').html('Redo')
        $('#subtitle').html('I reckon you nailed it the first time')
        $('#howToUse').html('Click on the page once and you will go forward a step, keep clicking to keep going forward.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
});