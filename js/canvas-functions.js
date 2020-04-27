// For undo and redo
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

// Draw a red, dotted line
function drawDotted(x, y, cpx, cpy, context) {
    context.save()
    context.strokeStyle = "rgba(255, 0, 0, 1)"
    context.lineWidth = 2;
    context.setLineDash([3, 3]);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(cpx, cpy);
    context.stroke();
    context.restore()
}

// Draw small red rectangules
function drawRect(cpx, cpy, context) {
    context.save()
    context.fillStyle = "rgba(255, 0, 0, 1)"
    context.fillRect(cpx - 5, cpy - 5, 10, 10)
    context.restore()
}

// Find mid point
function midPoint(x1, y1, x2, y2){
    let midX = x1 - x2;
    let midY = y1 - y2

    midX = x1 - midX / 2 
    midY = y1 - midY / 2

    return [midX, midY]
}

// Get length between two points, or the shortest length between three
function getChordLength(x1, y1, x2, y2, x3, y3) {
    let diffX01 = x1 - x2;
    let diffY01 = y1 - y2;
    let lengthSquare01 = Math.pow(diffX01, 2) + Math.pow(diffY01, 2);
    let length01 = Math.pow(lengthSquare01, 0.5);

    if (x3){
        let diffX02 = x1 - x3;
        let diffY02 = y1 - y3;
        let lengthSquare02 = Math.pow(diffX02, 2) + Math.pow(diffY02, 2);
        let length02 = Math.pow(lengthSquare02, 0.5);

        return length01 < length02 ? length01 : length02
    }

    return length01
}

// Check to matching starting RGB
function matchStartColour(pixelPos, startR, startG, startB, imgData) {
    let r = imgData.data[pixelPos];
    let g = imgData.data[pixelPos + 1];
    let b = imgData.data[pixelPos + 2];

    return (r == startR && g == startG && b == startB);
}

// Change the colour of the pixel
function colorPixel(pixelPos, imgData) {
    imgData.data[pixelPos] = 50;
    imgData.data[pixelPos + 1] = 50;
    imgData.data[pixelPos + 2] = 50;
    imgData.data[pixelPos + 3] = 255;
}

// Drawing a straight line
function drawStraight(x1, y1, x2, y2, context) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function isClosed(x1, y1, x2, y2){
    let coordMatch = 0
    for (let i = -10; i < 10; i++){
        if (x1 + i === x2){
            coordMatch++
        }
        if (y1 + i === y2){
            coordMatch++
        }
    }
    if (coordMatch === 2){
        return true
    }
    return false
}