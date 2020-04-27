let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');

let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');

let curStroke = "rgba(50, 50, 50, 1)"
let curFill = "rgba(255, 150, 150, 1)"
let curFont = "50px Ariel"

let curJoin = "round"
let curWidth = 5
let curMitre = 10
let numSides = 8
let curOffset = 0;

let canvasHeight = $('#canvas-real').attr('height').replace('px','')
let canvasWidth = $('#canvas-real').attr('width').replace('px','')

// For marching ants in Selection
// let selActive = false
// let selOrigX = 0
// let selOrigY = 0
// let selWidth = 0
// let selHeight = 0

let blurAmt = 3;
let brightAmt = 30;
let constrastAmt = 1.4;
let sepiaAmt = 1;
let greyAmt = 1;

let currentFunction;
let dragging = false;
let drawing = false

$(document).keydown(function (e) {
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

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}

// For Undo and Redo
let cPushArray = new Array();
let cStep = -1;
	
function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(canvasReal.toDataURL());
}

// For filters
function applyFilter(filter) {
    let imageData = contextReal.getImageData(0,0, canvasWidth, canvasHeight);
    let data = imageData.data;

    let imageDataCopy = contextReal.getImageData(0,0, canvasWidth, canvasHeight);
    let dataCopy = imageDataCopy.data;

    let index = (canvasWidth * canvasHeight * 4) - 4;

    while (index >= 0){
        filter(data, index, dataCopy)

        // Testing for RGB values
        // if (index % 10000 === 0){
        //     console.log('Red: ' + data[index])
        //     console.log('Green: ' + data[index + 1])
        //     console.log('Blue: ' + data[index + 2])
        // }

        index -= 4
    }
    contextReal.putImageData(imageData,0,0)
}