let canvasZoomReal = document.getElementById('canvas-zoom-real');
let contextZoomReal = canvasZoomReal.getContext('2d');

let canvasZoomDraft = document.getElementById('canvas-zoom-draft');
let contextZoomDraft = canvasZoomDraft.getContext('2d');

$('#canvas-zoom-real').attr('width', `${canvasWidth * 3}px`)
$('#canvas-zoom-real').attr('height', `${canvasHeight * 3}px`)

$('#canvas-zoom-draft').attr('width', `${canvasWidth * 3}px`)
$('#canvas-zoom-draft').attr('height', `${canvasHeight * 3}px`)

$('.canvas-zoom').css('left', `${-canvasWidth}px`)
$('.canvas-zoom').css('top', `${-canvasHeight}px`)

$('#canvas-zoom-real').hide()
$('#canvas-zoom-draft').hide()

let region = new Path2D();
region.rect(canvasWidth, canvasHeight, canvasWidth, canvasHeight);
contextZoomReal.clip(region);
contextZoomDraft.clip(region);

let zoomX = 0
let zoomY = 0

$('#canvas-zoom-draft').mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});

$('#canvas-zoom-draft').mousemove(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});

$('#canvas-zoom-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('#canvas-zoom-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvaszoom--draft').mouseenter(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});