$('#button-01').click(() => {
    if (tab === 'default') {
        // Selection
        currentFunction = new DrawingSelection(contextReal, contextDraft);

        $('#title').html('Selection')
        $('#subtitle').html('Use this to select things on the page')
        $('#howToUse').html('Click once to create a starting point, move your mouse to where you want to end your selection and then click again to finish the selection.</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'lines') {
        // Pencil
        currentFunction = new DrawingLine(contextReal, contextDraft);

        $('#title').html('Pencil')
        $('#subtitle').html('Go wild and draw freehand')
        $('#howToUse').html('Click the mouse down and drag to continuously draw freehand.</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'shapes') {
        // Rectangle
        currentFunction = new DrawingRectangle(contextReal, contextDraft);

        $('#title').html('Rectangle')
        $('#subtitle').html('Draw a rectangle with a stroke and a fill')
        $('#howToUse').html('Click once to create a starting point, move your mouse to where you want to end your rectangle and then click again to finish the rectangle.</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'filters') {
        // Blur
        currentFunction = new DrawingBlur(contextReal, contextDraft);

        $('#title').html('Blur')
        $('#subtitle').html('Blur it and cover up your mistakes!')
        $('#howToUse').html('Click on the page once and your image will be blurred. Select how much blur you want with the slider below:')

        $('#slider').css('display', 'flex')
        $('#customRange').attr('max', '5')
        $('#customRange').attr('step', '1')
        $('#customRange').val('1')
        $('.valueSpan2').html('1');
        sliderNum = 1
        
        $('#stamps').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'utilities') {
        // Undo
        currentFunction = new DrawingUndo(contextReal, contextDraft);

        $('#title').html('Undo')
        $('#subtitle').html('Made a mistake? Go back a step')
        $('#howToUse').html('Click on the page once and you will go back a step, keep clicking to keep going back.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
});