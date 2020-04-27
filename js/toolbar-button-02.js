$('#button-02').click(() => {
    if (tab === 'default'){
        // Move
        currentFunction = new DrawingMove(contextReal,contextDraft,contextSelect);

        $('#title').html('Move')
        $('#subtitle').html('Use this to move things on the page')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'lines'){
        // Brush
        currentFunction = new DrawingBrushLine(contextReal,contextDraft);

        $('#title').html('Brush')
        $('#subtitle').html('Try out some of the styles below!')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'shapes'){
        // Circle
        currentFunction = new DrawingCircle(contextReal,contextDraft);

        $('#title').html('Circle')
        $('#subtitle').html('Draw a circle with a stroke and a fill')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'filters'){
        // Greyscale
        applyFilter(greyScale)
        cPush()

        $('#title').html('Greyscale')
        $('#subtitle').html('Be trendy and turn it black and white!')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'utilities'){
        // Redo
        cRedo();

        $('#title').html('Redo')
        $('#subtitle').html('I reckon you nailed it the first time')
        $('#howToUse').html('Lorem Epsum')
    }
});