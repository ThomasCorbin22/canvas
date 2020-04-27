$('#button-04').click(() => {
    if (tab === 'default'){
        // Text
        currentFunction = new DrawingText(contextReal, contextDraft);

        $('#title').html('Text')
        $('#subtitle').html('Add some funky text')
        $('#howToUse').html('Click once to position where you want the text. Write the text that you want and then click again to paste it onto the canvas')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'lines'){
        // Straight Line
        currentFunction = new DrawingStraightLine(contextReal,contextDraft);

        $('#title').html('Line')
        $('#subtitle').html('Draw a straight line')
        $('#howToUse').html('Click once to create a starting point, move your mouse to the end of the line and then click again to finish the line.</p><p>Press ESC or ENTER if you want to quit the tool.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'shapes'){
        // Polygon
        currentFunction = new DrawingPolygon(contextReal,contextDraft);

        $('#title').html('Polygon')
        $('#subtitle').html('Draw a polygon of any number of sides')
        $('#howToUse').html('Click once to create a starting point, move your mouse to size the radius of the circle and then click again to finish the circle.</p><p>Press ESC or ENTER if you want to quit the tool.</p><p>Select below how many sides you want you polygon to have:')
        
        $('#slider').css('display', 'flex')
        $('#customRange').attr('max', '12')
        $('#customRange').attr('min', '3')
        $('#customRange').attr('step', '1')
        $('#customRange').val('3')
        $('.valueSpan2').html('3');
        sliderNum = 3
        
        $('#stamps').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'filters'){
        // Invert
        currentFunction = new DrawingInvert(contextReal,contextDraft);

        $('#title').html('Invert')
        $('#subtitle').html('Invert the colours, sometimes it looks cooler')
        $('#howToUse').html('Click on the page once and the colours of your image will be inverted')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'utilities'){
        // Zoom In
        currentFunction = new DrawingZoomIn(contextReal,contextDraft);

        $('#title').html('Zoom In')
        $('#subtitle').html('Work on those tricky details')
        $('#howToUse').html('Click on the page once and you will zoom into that spot. Feel free to make modifications in this mode as well. Use \'Zoom Out\' to return to normal once you are done.')
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
});