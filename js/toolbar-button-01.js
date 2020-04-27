$('#button-01').click(() => {
    if (tab === 'default'){
        // Selection
        currentFunction = new DrawingSection(contextReal, contextDraft);

        $('#title').html('Selection')
        $('#subtitle').html('Use this to select things on the page')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'lines'){
        // Pencil
        currentFunction = new DrawingLine(contextReal, contextDraft);

        $('#title').html('Pencil')
        $('#subtitle').html('Go wild and draw freehand')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'shapes'){
        // Rectangle
        currentFunction = new DrawingRectangle(contextReal,contextDraft);

        $('#title').html('Rectangle')
        $('#subtitle').html('Draw a rectangle with a stroke and a fill')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'filters'){
        // Blur
        applyFilter(blur)
        cPush()

        $('#title').html('Blur')
        $('#subtitle').html('Blur it and cover up your mistakes!')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'utilities'){
        // Undo
        cUndo();

        $('#title').html('Undo')
        $('#subtitle').html('Made a mistake? Go back a step')
        $('#howToUse').html('Lorem Epsum')
    }
});