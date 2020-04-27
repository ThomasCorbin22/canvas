$('#button-04').click(() => {
    if (tab === 'default'){
        // Text
        currentFunction = new DrawingText(contextReal, contextDraft);

        $('#title').html('Text')
        $('#subtitle').html('Add some funky text')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'lines'){
        // Straight Line
        currentFunction = new DrawingStraightLine(contextReal,contextDraft);

        $('#title').html('Pen')
        $('#subtitle').html('Make any shape you want')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'shapes'){
        // Polygon
        currentFunction = new DrawingPolygon(contextReal,contextDraft);

        $('#title').html('Polygon')
        $('#subtitle').html('Draw a polygon of any number of sides')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'filters'){
        // Invert
        applyFilter(invert)
        cPush()

        $('#title').html('Invert')
        $('#subtitle').html('Invert the colours, sometimes it looks cooler')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'utilities'){
        // Zoom Out
        drawingZoomOut()

        $('#title').html('Zoom Out')
        $('#subtitle').html('Let\'s get back to a normal scale')
        $('#howToUse').html('Lorem Epsum')
    }
});