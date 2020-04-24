$('#drawing-scale').click(() => {
    currentFunction = new DrawingScale(contextReal,contextDraft);

    points = {
        1: [0, 0],
        2: [canvasWidth / 2, 0],
        3: [canvasWidth, 0],
        4: [0, canvasHeight / 2],
        5: [canvasWidth / 2, canvasHeight / 2],
        6: [canvasWidth, canvasHeight / 2],
        7: [0, canvasHeight],
        8: [canvasWidth / 2, canvasHeight],
        9: [canvasWidth, canvasHeight]
    }

    drawRect(points[1][0], points[1][1], contextDraft)
    drawRect(points[2][0], points[2][1], contextDraft)
    drawRect(points[3][0], points[3][1], contextDraft)

    drawRect(points[4][0], points[4][1], contextDraft)
    drawRect(points[5][0], points[5][1], contextDraft)
    drawRect(points[6][0], points[6][1], contextDraft)

    drawRect(points[7][0], points[7][1], contextDraft)
    drawRect(points[8][0], points[8][1], contextDraft)
    drawRect(points[9][0], points[9][1], contextDraft)
});

class DrawingScale extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft; 
        this.clickNum = 0
        this.point = 0
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(coord,event){
        if (this.clickNum != 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum != 0 && this.point !== 0){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            scaleImage(0,0,coord[0], coord[1], canvasWidth, canvasHeight, this.point, contextDraft, canvasReal, 'rects')
        }
    }

    onMouseUp(coord,event){
        if (this.clickNum === 0) {

            if (isClosed(coord[0], coord[1], points[1][0], points[1][1])){this.point = 1}
            else if (isClosed(coord[0], coord[1], points[2][0], points[2][1])){this.point = 2}
            else if (isClosed(coord[0], coord[1], points[3][0], points[3][1])){this.point = 3}
            else if (isClosed(coord[0], coord[1], points[4][0], points[4][1])){this.point = 4}
            else if (isClosed(coord[0], coord[1], points[5][0], points[5][1])){this.point = 5}
            else if (isClosed(coord[0], coord[1], points[6][0], points[6][1])){this.point = 6}
            else if (isClosed(coord[0], coord[1], points[7][0], points[7][1])){this.point = 7}
            else if (isClosed(coord[0], coord[1], points[8][0], points[8][1])){this.point = 8}
            else if (isClosed(coord[0], coord[1], points[9][0], points[9][1])){this.point = 9}
            
            if (this.point !== 0){
                this.origX = coord[0];
                this.origY = coord[1];
                this.clickNum++
                drawing = true
                $('#canvas-real').hide()
            }
        }

        else if (this.clickNum === 1) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            scaleImage(0,0,coord[0], coord[1], canvasWidth, canvasHeight, this.point, contextDraft, canvasReal, '')

            this.contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);

            contextReal.drawImage(
                //Element to draw to realCanvas
                canvasDraft, 
                // X-axis coordinate of the draftCanvas to draw from
                0,
                // Y-axis coordinate of the draftCanvas to draw from
                0,
                // Width of the draftCanvas to draw from
                canvasWidth, 
                // Height of the draftCanvas to draw from
                canvasHeight, 
                // X-axis coordinate of the realCanvas to draw to
                0, 
                // Y-axis coordinate of the realCanvas to draw to
                0, 
                // Width to draw the image on the realCanvas
                canvasWidth,
                // Height to draw the image on the realCanvas
                canvasHeight
            )

            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.width);

            this.clickNum = 0
            $('#canvas-real').show()
            cPush()
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

function scaleImage(x1, y1, x2, y2, width, height, point, context, canvas, option){
    let initX = x1
    let initY = y1
    let lengthX = width
    let lengthY = height

    if (point === 1 || point === 4 || point === 7){
        initX = x2
        lengthX = canvasWidth - x2
    }
    if (point === 1 || point === 2 || point === 3){
        initY = y2
        lengthY = canvasHeight - y2
    }
    if (point === 3 || point === 6 || point === 9){
        lengthX = x2
    }
    if (point === 7 || point === 8 || point === 9){
        lengthY = y2
    }

    context.drawImage(canvas,0,0,canvasWidth,canvasHeight,initX,initY,lengthX,lengthY)

    if (option === 'rects'){
        drawRect(initX, initY, contextDraft)
        drawRect(initX + lengthX / 2, initY, contextDraft)
        drawRect(initX + lengthX, initY, contextDraft)
    
        drawRect(initX, initY + lengthY / 2, contextDraft)
        drawRect(initX + lengthX / 2, initY + lengthY / 2, contextDraft)
        drawRect(initX + lengthX, initY + lengthY / 2, contextDraft)
    
        drawRect(initX, initY + lengthY, contextDraft)
        drawRect(initX + lengthX / 2, initY + lengthY, contextDraft)
        drawRect(initX + lengthX, initY + lengthY, contextDraft)
    }
}