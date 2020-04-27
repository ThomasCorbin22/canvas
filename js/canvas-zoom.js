$('#canvas-zoom-real').attr('width', `${canvasWidth * 3}px`)
$('#canvas-zoom-real').attr('height', `${canvasHeight * 3}px`)

$('#canvas-zoom-draft').attr('width', `${canvasWidth * 3}px`)
$('#canvas-zoom-draft').attr('height', `${canvasHeight * 3}px`)

$('#canvas-zoom-select').attr('width', `${canvasWidth * 3}px`)
$('#canvas-zoom-select').attr('height', `${canvasHeight * 3}px`)

$('.canvas-zoom').css('left', `${-canvasWidth}px`)
$('.canvas-zoom').css('top', `${-canvasHeight}px`)

$('#canvas-zoom-real').hide()
$('#canvas-zoom-draft').hide()
$('#canvas-zoom-select').hide()

let region = new Path2D();
region.rect(canvasWidth, canvasHeight, canvasWidth, canvasHeight);
contextZoomReal.clip(region);
contextZoomDraft.clip(region);