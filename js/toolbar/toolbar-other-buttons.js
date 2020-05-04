$('#quadratic').click(() => {
    currentFunction = new DrawingQuadratic(contextReal,contextDraft);
    
    title = 'Quadratic'
    subtitle = 'Use a single control point to create a curve.'
    description = 'Click once to make a reference point, click once more to set the end point and then click again to set the control point.</p><p>Press ESC or ENTER if you want to quit the tool.'

    setHTML(title,subtitle,description)
})

$('#bezier').click(() => {
    currentFunction = new DrawingBezier(contextReal,contextDraft);
    
    title = 'Bezier'
    subtitle = 'Use two control points to create a curve.'
    description = 'Click once to make a reference point, click once more to set the end point, then click to set the first control point and finally click once more to set the last control point.</p><p>Press ESC or ENTER if you want to quit the tool.'

    setHTML(title,subtitle,description)
})


$('.stamp-img').click((event) => {
    stampImg = $(event.target).attr('src')
    console.log(stampImg)
})