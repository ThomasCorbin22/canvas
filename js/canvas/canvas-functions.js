$(document).ready(function () {

    const $valueSpan = $('.valueSpan2');
    const $value = $('#customRange');
    $valueSpan.html($value.val());
    $value.on('input change', () => {
        $valueSpan.html($value.val());
        sliderNum = Number($value.val())
        stampSize = 250 * sliderNum
    });
});

// For undo and redo
function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(canvasReal.toDataURL());
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
function midPoint(x1, y1, x2, y2) {
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

    if (x3) {
        let diffX02 = x1 - x3;
        let diffY02 = y1 - y3;
        let lengthSquare02 = Math.pow(diffX02, 2) + Math.pow(diffY02, 2);
        let length02 = Math.pow(lengthSquare02, 0.5);

        return length01 < length02 ? length01 : length02
    }

    return length01
}

// Drawing a straight line
function drawStraight(x1, y1, x2, y2, context) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

// Check if two sets of co-ordinates match
function isClosed(x1, y1, x2, y2) {
    let coordMatch = 0

    x1 = Math.round(x1)
    y1 = Math.round(y1)
    x2 = Math.round(x2)
    y2 = Math.round(y2)

    for (let i = -20; i < 20; i++) {
        if (x1 + i === x2) {
            coordMatch++
        }
        if (y1 + i === y2) {
            coordMatch++
        }
    }
    if (coordMatch === 2) {
        return true
    }
    return false
}

// For filters
function applyFilter(filter) {
    let imageData = contextReal.getImageData(0, 0, canvasWidth, canvasHeight);
    let data = imageData.data;

    let imageDataCopy = contextReal.getImageData(0, 0, canvasWidth, canvasHeight);
    let dataCopy = imageDataCopy.data;

    let index = (canvasWidth * canvasHeight * 4) - 4;

    while (index >= 0) {
        filter(data, index, dataCopy)

        // Testing for RGB values
        // if (index % 10000 === 0){
        //     console.log('Red: ' + data[index])
        //     console.log('Green: ' + data[index + 1])
        //     console.log('Blue: ' + data[index + 2])
        // }

        index -= 4
    }
    contextReal.putImageData(imageData, 0, 0)
}

// Blur an image
function blur(data, index, dataCopy) {
    let blurRed = 0;
    let blurGreen = 0;
    let blurBlue = 0;
    let ratio = 0

    for (let i = -sliderNum; i <= sliderNum; i++) {
        // Checks if width is off the page
        if (index + i * 4 >= 0 && index + i * 4 <= (canvasWidth * canvasHeight * 4) - 4) {
            for (let j = -sliderNum; j <= sliderNum; j++) {
                // Checks if height is off the page
                if (index + j * 4 * canvasWidth >= 0 && index + j * 4 * canvasWidth <= (canvasWidth * canvasHeight * 4) - 4) {
                    if (dataCopy[index + i * 4 + j * 4 * canvasWidth + 3] === 0) {
                        blurRed += 255
                        blurGreen += 255
                        blurBlue += 255
                    }
                    else {
                        blurRed += dataCopy[index + i * 4 + j * 4 * canvasWidth]
                        blurGreen += dataCopy[index + i * 4 + j * 4 * canvasWidth + 1]
                        blurBlue += dataCopy[index + i * 4 + j * 4 * canvasWidth + 2]
                    }
                    ratio++
                }
            }
        }
    }

    data[index] = Math.round(blurRed / ratio);
    data[index + 1] = Math.round(blurGreen / ratio);
    data[index + 2] = Math.round(blurBlue / ratio);
}

// Greyscale an image
function greyScale(data, index) {
    let grey = 0

    //Get pixel average
    grey += data[index] * 0.2126
    grey += data[index + 1] * 0.7152
    grey += data[index + 2] * 0.0722
    grey = Math.round(grey / 3)

    // Allows control of how much greyscale is added
    let redDiff = data[index] - grey
    let greenDiff = data[index + 1] - grey
    let blueDiff = data[index + 2] - grey

    data[index] -= redDiff * sliderNum
    data[index + 1] -= greenDiff * sliderNum
    data[index + 2] -= blueDiff * sliderNum
}

// Turn an image sepia
function sepia(data, index) {
    let originalRed = data[index]
    let originalGreen = data[index + 1]
    let originalBlue = data[index + 2]

    let sepiaRed = Math.round(.393 * originalRed + .769 * originalGreen + .189 * originalBlue)
    let sepiaGreen = Math.round(.349 * originalRed + .686 * originalGreen + .168 * originalBlue);
    let sepiaBlue = Math.round(.272 * originalRed + .534 * originalGreen + .131 * originalBlue);

    // Allows control of how much sepia is added
    let redDiff = data[index] - sepiaRed
    let greenDiff = data[index + 1] - sepiaGreen
    let blueDiff = data[index + 2] - sepiaBlue

    sepiaRed -= redDiff * sliderNum
    sepiaGreen -= greenDiff * sliderNum
    sepiaBlue -= blueDiff * sliderNum

    // Check to see if any values exceed limits
    if (sepiaRed > 255) {
        data[index] = 255
    }
    else {
        data[index] = sepiaRed
    }
    if (sepiaGreen > 255) {
        data[index + 1] = 255
    }
    else {
        data[index + 1] = sepiaGreen
    }
    if (sepiaBlue > 255) {
        data[index + 2] = 255
    }
    else {
        data[index + 2] = sepiaBlue
    }
}

// Invert the colours of an image
function invert(data, index) {
    let brightRed = 255 - data[index]
    let brightGreen = 255 - data[index + 1]
    let brightBlue = 255 - data[index + 2]

    if (brightRed > 255) {
        data[index] = 255
    }
    else if (brightRed < 0) {
        data[index] = 0
    }
    else {
        data[index] = brightRed
    }
    if (brightGreen > 255) {
        data[index + 1] = 255
    }
    else if (brightGreen < 0) {
        data[index + 1] = 0
    }
    else {
        data[index + 1] = brightGreen
    }
    if (brightBlue > 255) {
        data[index + 2] = 255
    }
    else if (brightBlue < 0) {
        data[index + 2] = 0
    }
    else {
        data[index + 2] = brightBlue
    }
}

// Increase the contrast of an image
function contrast(data, index) {
    let contrastRed = Math.round((data[index] - 127.5) * sliderNum + 127.5)
    let contrastGreen = Math.round((data[index + 1] - 127.5) * sliderNum + 127.5)
    let contrastBlue = Math.round((data[index + 2] - 127.5) * sliderNum + 127.5)

    if (contrastRed > 255) {
        data[index] = 255
    }
    else if (contrastRed < 0) {
        data[index] = 0
    }
    else {
        data[index] = contrastRed
    }
    if (contrastGreen > 255) {
        data[index + 1] = 255
    }
    else if (contrastGreen < 0) {
        data[index + 1] = 0
    }
    else {
        data[index + 1] = contrastGreen
    }
    if (contrastBlue > 255) {
        data[index + 2] = 255
    }
    else if (contrastBlue < 0) {
        data[index + 2] = 0
    }
    else {
        data[index + 2] = contrastBlue
    }
}

// Increase the brightness of an image
function brightness(data, index) {
    let brightRed = data[index] + sliderNum
    let brightGreen = data[index + 1] + sliderNum
    let brightBlue = data[index + 2] + sliderNum

    if (brightRed > 255) {
        data[index] = 255
    }
    else if (brightRed < 0) {
        data[index] = 0
    }
    else {
        data[index] = brightRed
    }
    if (brightGreen > 255) {
        data[index + 1] = 255
    }
    else if (brightGreen < 0) {
        data[index + 1] = 0
    }
    else {
        data[index + 1] = brightGreen
    }
    if (brightBlue > 255) {
        data[index + 2] = 255
    }
    else if (brightBlue < 0) {
        data[index + 2] = 0
    }
    else {
        data[index + 2] = brightBlue
    }
}

// Check to matching starting RGB
function matchStartColour(pixelPos, startR, startG, startB, imgData) {
    let r = imgData.data[pixelPos];
    let g = imgData.data[pixelPos + 1];
    let b = imgData.data[pixelPos + 2];

    return (r == startR && g == startG && b == startB);
}

// Change the colour of the pixel
function colorPixel(pixelPos, imgData, curFillRGBA) {
    imgData.data[pixelPos] = Number(curFillRGBA[0]);
    imgData.data[pixelPos + 1] = Number(curFillRGBA[1]);
    imgData.data[pixelPos + 2] = Number(curFillRGBA[2]);
    imgData.data[pixelPos + 3] = Math.round(Number(curFillRGBA[3]) * 255);
}

// Paint Bucket Fill
function paintBucketFill(coord, context) {

    let newPos, x, y, pixelPos, reachLeft, reachRight;

    let imgData = context.getImageData(0, 0, canvasWidth, canvasHeight);

    let pixelData = context.getImageData(coord[0], coord[1], 1, 1);
    let pixelStack = [coord];

    let startR = pixelData.data[0]
    let startG = pixelData.data[1]
    let startB = pixelData.data[2]

    let curFillRGBA = curFill.replace(/\s+/g, '').split('(')[1].split(')')[0].split(',')

    while (pixelStack.length) {
        newPos = pixelStack.pop();
        x = newPos[0];
        y = newPos[1];

        // Get current pixel position
        pixelPos = (y * canvasWidth + x) * 4;

        // Go up the page as long as the colour matches
        while (y >= 0 && matchStartColour(pixelPos, startR, startG, startB, imgData)) {
            y--
            pixelPos -= canvasWidth * 4;
        }

        pixelPos += canvasWidth * 4;
        y++;
        reachLeft = false;
        reachRight = false;

        // Go down the page as long as the colour matches and is in the canvas
        while (y <= canvasHeight -1 && matchStartColour(pixelPos, startR, startG, startB, imgData)) {
            y++

            colorPixel(pixelPos, imgData, curFillRGBA);

            if (pixelPos === undefined || imgData.data[pixelPos] === undefined){
                y = canvasHeight
            }

            if (x > 0) {
                if (matchStartColour(pixelPos - 4, startR, startG, startB, imgData)) {
                    if (!reachLeft) {
                        // Add pixel to stack
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                }
                else if (reachLeft) {
                    reachLeft = false;
                }
            }

            if (x < canvasWidth - 1) {
                if (matchStartColour(pixelPos + 4, startR, startG, startB, imgData)) {
                    if (!reachRight) {
                        // Add pixed to stack
                        pixelStack.push([x + 1, y]);
                        reachRight = true;
                    }
                }
                else if (reachRight) {
                    reachRight = false;
                }
            }

            pixelPos += canvasWidth * 4;
        }
    }
    context.putImageData(imgData, 0, 0);
}

// Scale an image from original coordinates to new coordinates
function scaleImage(x, y, point, context, canvas, option){
    let initX = selectX
    let initY = selectY
    let lengthX = selectWidth
    let lengthY = selectHeight

    if (point === 1 || point === 4 || point === 7){
        initX = x
        lengthX = selectWidth - (x - selectX)
    }
    if (point === 1 || point === 2 || point === 3){
        initY = y
        lengthY = selectHeight - (y - selectY)
    }
    if (point === 3 || point === 6 || point === 9){
        lengthX = (x - selectX)
    }
    if (point === 7 || point === 8 || point === 9){
        lengthY = (y - selectY)
    }

    context.drawImage(canvas,selectX,selectY,selectWidth,selectHeight,initX,initY,lengthX,lengthY)

    if (option === 'rects'){
        setPoints(initX, initY, lengthX, lengthY)
        drawRectBoundry()
    }
    else if (option === 'select'){
        setSelection(initX, initY, lengthX, lengthY)
    }
}


// Draw red rectangles around a selection
function drawRectBoundry(){
    drawRect(points[1][0], points[1][1], contextDraft)
    drawRect(points[2][0], points[2][1], contextDraft)
    drawRect(points[3][0], points[3][1], contextDraft)

    drawRect(points[4][0], points[4][1], contextDraft)
    drawRect(points[5][0], points[5][1], contextDraft)
    drawRect(points[6][0], points[6][1], contextDraft)

    drawRect(points[7][0], points[7][1], contextDraft)
    drawRect(points[8][0], points[8][1], contextDraft)
    drawRect(points[9][0], points[9][1], contextDraft)
}

// Reset the selection variables
function resetSeletion(){
    selecting = false
    selectX = 0
    selectY = 0
    selectWidth = canvasWidth
    selectHeight = canvasHeight
}

// Draw a white box
function drawWhite(x, y, width, height, context){
    context.save()
    context.fillStyle = "rgba(255, 255, 255, 1)"
    context.fillRect(x, y, width, height);
    context.restore()
}

// Set the new selection points
function setPoints(x, y, width, height){
    points = {
        1: [x, y],
        2: [x + width / 2, y],
        3: [x + width, y],

        4: [x, y + height / 2],
        5: [x + width / 2, y + height / 2],
        6: [x + width, y + height / 2],

        7: [x, y + height],
        8: [x + width / 2, y + height],
        9: [x + width, y + height]
    }
}

// Set the selection variables
function setSelection(x, y, width, height){
    selectX = x
    selectY = y
    selectWidth = width
    selectHeight = height
}

// Set the HTML tags value
function setHTML(title,subtitle,description){
    $('#title').html(title)
    $('#subtitle').html(subtitle)
    $('#howToUse').html(description)
}