$('#button-03').click(() => {
    if (tab === 'default'){
        // Eraser
        currentFunction = new DrawingEraser(contextReal,contextDraft,contextSelect);

        $('#title').html('Eraser')
        $('#subtitle').html('Rub out any mistakes you\'ve made')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'lines'){
        // Pen
        currentFunction = new DrawingPolyline(contextReal,contextDraft);

        $('#title').html('Pen')
        $('#subtitle').html('Make any shape you want')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'shapes'){
        // Circle
        currentFunction = new DrawingOval(contextReal,contextDraft);

        $('#title').html('Ellipse')
        $('#subtitle').html('Draw an ellipse with a stroke and a fill')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'filters'){
        // Sepia
        applyFilter(sepia)
        cPush()

        $('#title').html('Sepia')
        $('#subtitle').html('Go retro with Sepia')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'utilities'){
        // Zoom In
        currentFunction = new DrawingZoomIn(contextReal,contextDraft);

        $('#title').html('Zoom In')
        $('#subtitle').html('Work on those tricky details')
        $('#howToUse').html('Lorem Epsum')
    }
});