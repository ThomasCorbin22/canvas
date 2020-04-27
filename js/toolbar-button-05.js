$('#button-05').click(() => {
    if (tab === 'default'){
        // Scale
        currentFunction = new DrawingScale(contextReal,contextDraft);

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

        $('#title').html('Scale')
        $('#subtitle').html('Transform as your heart desires')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'lines'){
        // Arc
        currentFunction = new DrawingArc(contextReal,contextDraft);

        $('#title').html('Arc')
        $('#subtitle').html('Make a consistent arc')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'shapes'){
        // Paint Bucket
        currentFunction = new DrawingFillBucket(contextReal,contextDraft);

        $('#title').html('Fill Bucket')
        $('#subtitle').html('Flood the space with whatever colour you want')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'filters'){
        // Contrast
        applyFilter(contrast)
        cPush()

        $('#title').html('Contrast')
        $('#subtitle').html('Up the contrast a little')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'utilities'){
        // Save
        save()

        $('#title').html('Save')
        $('#subtitle').html('Save your work to your computer')
        $('#howToUse').html('Lorem Epsum')
    }
});