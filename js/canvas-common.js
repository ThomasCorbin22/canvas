$('#canvas-real').attr('width', `${canvasWidth}px`)
$('#canvas-real').attr('height', `${canvasHeight}px`)

$('#canvas-draft').attr('width', `${canvasWidth}px`)
$('#canvas-draft').attr('height', `${canvasHeight}px`)

$('#canvas-select').attr('width', `${canvasWidth}px`)
$('#canvas-select').attr('height', `${canvasHeight}px`)

$('#canvas-container').css('height', `${canvasHeight}`)

$('#canvas-select').hide()

$(document).keydown(function (e) {
    if (e.key === "Enter" || e.key === "Escape") {
        drawing = false
    }
});

$('.drawing-canvas').mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});

$('.drawing-canvas').mousemove(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});

$('.drawing-canvas').mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('.drawing-canvas').mouseleave(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('.drawing-canvas').mouseenter(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}

