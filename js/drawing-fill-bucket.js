$('#drawing-fill-bucket').click(() => {
    currentFunction = new DrawingFillBucket(contextReal, contextDraft);
});

class DrawingFillBucket extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown() { }

    onDragging() { }
    onMouseMove() { }

    onMouseUp(coord, event) {
        // console.log('On mouse up context: ' + this.contextReal)
        paintBucketFill(coord, this.contextReal)
        cPush()
    }
    onMouseLeave() { }
    onMouseEnter() { }
}

function paintBucketFill(coord, context) {

    let newPos, x, y, pixelPos, reachLeft, reachRight;

    let imgData = context.getImageData(0, 0, canvasWidth, canvasHeight);
    // console.log(imgData)
    // console.log(imgData.data[0])

    let pixelData = context.getImageData(coord[0], coord[1], 1, 1);
    let pixelStack = [coord];
    // console.log('Co-ordinations: ' + coord)
    // console.log(typeof coord)

    let startR = pixelData.data[0]
    let startG = pixelData.data[1]
    let startB = pixelData.data[2]

    // console.log('Start R: ' + startR)
    // console.log('Start G: ' + startG)
    // console.log('Start B: ' + startB)

    while (pixelStack.length) {
        newPos = pixelStack.pop();
        x = newPos[0];
        y = newPos[1];

        // Get current pixel position
        pixelPos = (y * canvasWidth + x) * 4;
        // console.log('Pixel Position: ' + pixelPos)
        // console.log('X: ' + x)
        // console.log('Y: ' + y)

        // console.log('MatchStartColor: ' + matchStartColour(pixelPos, startR, startG, startB, imgData))

        // Go up the page as long as the colour matches
        while (y >= 0 && matchStartColour(pixelPos, startR, startG, startB, imgData)) {
            y--
            pixelPos -= canvasWidth * 4;
        }

        pixelPos += canvasWidth * 4;
        y++;
        reachLeft = false;
        reachRight = false;

        // console.log('Found top position')
        // console.log('Pixel Position: ' + pixelPos)
        // console.log('Y: ' + y)

        // Go down the page as long as the colour matches and is in the canvas
        while (y <= canvasHeight -1 && matchStartColour(pixelPos, startR, startG, startB, imgData)) {
            y++

            colorPixel(pixelPos, imgData);

            // console.log('Pixel Position: ' + pixelPos)
            // console.log('Y: ' + y)
            // console.log('Img Data: ' + imgData)
            // console.log('R: ' + imgData.data[pixelPos])
            // console.log('G: ' + imgData.data[pixelPos + 1])
            // console.log('B: ' + imgData.data[pixelPos + 2])

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


function matchStartColour(pixelPos, startR, startG, startB, imgData) {
    let r = imgData.data[pixelPos];
    let g = imgData.data[pixelPos + 1];
    let b = imgData.data[pixelPos + 2];

    return (r == startR && g == startG && b == startB);
}

function colorPixel(pixelPos, imgData) {
    imgData.data[pixelPos] = 50;
    imgData.data[pixelPos + 1] = 50;
    imgData.data[pixelPos + 2] = 50;
    imgData.data[pixelPos + 3] = 255;
}