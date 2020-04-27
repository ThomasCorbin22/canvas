$('#quadratic').click(() => {
    currentFunction = new DrawingQuadratic(contextReal,contextDraft);
    
    $('#title').html('Quadratic')
    $('#subtitle').html('Use a single control point to create a curve.')
    $('#howToUse').html('Click once to make a reference point, click once more to set the end point and then click again to set the control point.</p><p>Press ESC or ENTER if you want to quit the tool.')
})

$('#bezier').click(() => {
    currentFunction = new DrawingBezier(contextReal,contextDraft);
    
    $('#title').html('Bezier')
    $('#subtitle').html('Use two control points to create a curve.')
    $('#howToUse').html('Click once to make a reference point, click once more to set the end point, then click to set the first control point and finally click once more to set the last control point.</p><p>Press ESC or ENTER if you want to quit the tool.')
})


$('.stamp-img').click((event) => {
    stampImg = $(event.target).attr('src')
    console.log(stampImg)
})