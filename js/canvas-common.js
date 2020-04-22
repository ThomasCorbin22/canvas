let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');

let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');

let curStroke = "rgba(50, 50, 50, 1)"
let curFill = "rgba(150, 150, 150, 1)"

let curJoin = "round"
let curWidth = 5
let curMitre = 10
let numSides = 8

let canvasHeight = $('#canvas-real').attr('height').replace('px','')
let canvasWidth = $('#canvas-real').attr('width').replace('px','')

// let outlineLayer = contextReal.getImageData(0, 0, canvasWidth, canvasHeight);
// let colorLayer = contextReal.getImageData(0, 0, canvasWidth, canvasHeight);
// console.log(outlineLayerData)
// console.log(colorLayerData)

let currentFunction;
let dragging = false;
let drawing = false


$(document).keypress(function (e) {
    if (e.key === "Enter" || e.key === "Escape") {
        drawing = false
    }
});

$('#canvas-draft').mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
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