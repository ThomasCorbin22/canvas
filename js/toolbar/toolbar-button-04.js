$('#button-04').click(() => {
    if (tab === 'default'){
        // Text
        currentFunction = new DrawingText(contextReal, contextDraft);

        title = 'Text'
        subtitle = 'Add some funky text'
        description = 'Click once to position where you want the text. Write the text that you want and then click again to paste it onto the canvas'
        
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
        // Polygon
        currentFunction = new DrawingPolygon(contextReal,contextDraft);

        title = 'Polygon'
        subtitle = 'Draw a polygon of any number of sides'
        description = 'Click once to create a starting point, move your mouse to size the radius of the circle and then click again to finish the circle.</p><p>Press ESC or ENTER if you want to quit the tool.</p><p>Select below how many sides you want you polygon to have:'
        
        $('#slider').css('display', 'flex')
        $('#customRange').attr('min', '3')
        $('#customRange').attr('max', '12')
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

        title = 'Invert'
        subtitle = 'Invert the colours, sometimes it looks cooler'
        description = 'Click on the page once and the colours of your image will be inverted'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
    else if (tab === 'utilities'){
        // Zoom In
        currentFunction = new DrawingZoomIn(contextReal,contextDraft);

        title = 'Zoom In'
        subtitle = 'Work on those tricky details'
        description = 'Click on the page once and you will zoom into that spot. Feel free to make modifications in this mode as well. Use \'Zoom Out\' to return to normal once you are done.'
        
        $('#stamps').css('display', 'none')
        $('#slider').css('display', 'none')
        $('#chooseCurve').css('display', 'none')
    }
});