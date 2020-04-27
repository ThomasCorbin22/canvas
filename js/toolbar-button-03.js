$('#button-03').click(() => {
    if (tab === 'default'){
        // Eraser
        currentFunction = new DrawingEraser(contextReal,contextDraft,contextSelect);

        $('#title').html('Eraser')
        $('#subtitle').html('Rub out any mistakes you\'ve made')
        $('#howToUse').html('Click the mouse down and drag to continuously erase by freehand.</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'lines'){
        // Pen
        currentFunction = new DrawingPolyline(contextReal,contextDraft);

        $('#title').html('Pen')
        $('#subtitle').html('Make any shape you want')
        $('#howToUse').html('Click once to create a reference point, move your mouse to where you want your next point and click again, the tool will end when you close your shape, or you can press ECS or ENTER to create an unclosed shape.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'shapes'){
        // Circle
        currentFunction = new DrawingOval(contextReal,contextDraft);

        $('#title').html('Ellipse')
        $('#subtitle').html('Draw an ellipse with a stroke and a fill')
        $('#howToUse').html('Click once to create a starting point, move your mouse to size the first radius of the ellipse and click to set it. Move your mouse again to size then second radius and then click again to finish the ellipse.</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'filters'){
        // Sepia
        currentFunction = new DrawingSepia(contextReal,contextDraft);

        $('#title').html('Sepia')
        $('#subtitle').html('Go retro with Sepia')
        $('#howToUse').html('Click on the page once and your image will be set to sepia. Select how much sepia you want with the slider below.</p><p>0 is no greyscale at all and 1 will be a complete sepia image.')
        
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
        // Save
        currentFunction = new DrawingSave(contextReal,contextDraft);

        $('#title').html('Save')
        $('#subtitle').html('Save your work to your computer')
        $('#howToUse').html('Click on the image to save it to your computer.')

        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
});