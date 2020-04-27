$('#button-06').click(() => {
    if (tab === 'default'){
        // Stamp
        currentFunction = new DrawingStamp(contextReal,contextDraft);

        $('#title').html('Stamp')
        $('#subtitle').html('Get some pretty pictures in your work')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'lines'){
        // Curve
        currentFunction = new DrawingQuadratic(contextReal,contextDraft);

        $('#title').html('Curve')
        $('#subtitle').html('Do you want a bezier or a quadratic?')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'filters'){
        // Brightness
        applyFilter(brightness)
        cPush()

        $('#title').html('Brightness')
        $('#subtitle').html('Make the image a little brighter')
        $('#howToUse').html('Lorem Epsum')
    }
    else if (tab === 'utilities'){
        // Clear
        clear()
        cPush()

        $('#title').html('Clear')
        $('#subtitle').html('Clear the canvas and start from scratch')
        $('#howToUse').html('Lorem Epsum')
    }
});