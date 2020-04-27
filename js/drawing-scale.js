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

            if (selecting === false){
                scaleImage(selectX,selectY,this.finalX, this.finalY, selectWidth, selectHeight, this.point, contextDraft, canvasReal, '', '')
    
                this.contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
            }
            else{
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(selectX - 5,selectY - 5,selectWidth + 10,selectHeight + 10);
                this.contextDraft.restore()

                scaleImage(selectX,selectY,this.finalX, this.finalY, selectWidth, selectHeight, this.point, contextDraft, canvasReal, '', '')
            }

            contextReal.drawImage(canvasDraft,0,0,canvasWidth,canvasHeight,0,0,canvasWidth,canvasHeight)
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.width);

            selecting = false
            selectX = 0
            selectY = 0
            selectWidth = canvasWidth
            selectHeight = canvasHeight

            this.clickNum = 0
            this.point = 0
            $('#canvas-real').show()
            cPush()
        }
        else if (this.clickNum % 2 === 1 && this.point !== 0){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            if (selecting === true) {
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(selectX,selectY,selectWidth + coord[0] - selectX,selectHeight + coord[1] - selectY);
                this.contextDraft.restore()
            }
            
            scaleImage(selectX,selectY,coord[0], coord[1], selectWidth, selectHeight, this.point, contextDraft, canvasReal, 'rects', '')
        }
    }

    onMouseUp(coord,event){
        this.point = 0

        if (isClosed(coord[0], coord[1], points[1][0], points[1][1])){this.point = 1}
        else if (isClosed(coord[0], coord[1], points[2][0], points[2][1])){this.point = 2}
        else if (isClosed(coord[0], coord[1], points[3][0], points[3][1])){this.point = 3}
        else if (isClosed(coord[0], coord[1], points[4][0], points[4][1])){this.point = 4}
        else if (isClosed(coord[0], coord[1], points[5][0], points[5][1])){this.point = 5}
        else if (isClosed(coord[0], coord[1], points[6][0], points[6][1])){this.point = 6}
        else if (isClosed(coord[0], coord[1], points[7][0], points[7][1])){this.point = 7}
        else if (isClosed(coord[0], coord[1], points[8][0], points[8][1])){this.point = 8}
        else if (isClosed(coord[0], coord[1], points[9][0], points[9][1])){this.point = 9}

        if (this.clickNum === 0 && this.point !== 0){
            drawing = true
            if (selecting === false){
                $('#canvas-real').hide()
            }
        }
        else if (this.clickNum % 2 === 1 && this.point !== 0){
            this.finalX = coord[0]
            this.finalY = coord[1]

            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            if (selecting === false){    
                this.contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
                scaleImage(selectX,selectY,this.finalX, this.finalY, selectWidth, selectHeight, this.point, contextDraft, canvasReal, '', 'select')

                contextReal.drawImage(canvasDraft,0,0,canvasWidth,canvasHeight,0,0,canvasWidth,canvasHeight)
            }
            else {
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(selectX,selectY,selectWidth,selectHeight);
                this.contextDraft.restore()
                
                scaleImage(selectX,selectY,this.finalX, this.finalY, selectWidth, selectHeight, this.point, contextDraft, canvasReal, '', 'select')

                this.contextReal.save()
                this.contextReal.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextReal.fillRect(selectX,selectY,selectWidth,selectHeight);
                this.contextReal.restore()

                contextReal.drawImage(canvasDraft,0,0,canvasWidth,canvasHeight,0,0,canvasWidth,canvasHeight)
            }
            scaleImage(selectX,selectY,this.finalX, this.finalY, selectWidth, selectHeight, this.point, contextDraft, canvasReal, 'rects', '')
        }
        this.clickNum++
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

function scaleImage(x1, y1, x2, y2, width, height, point, context, canvas, rectangles, selection){
    let initX = x1
    let initY = y1
    let lengthX = width
    let lengthY = height

    if (point === 1 || point === 4 || point === 7){
        initX = x2
        lengthX = selectWidth - (x2 - x1)
    }
    if (point === 1 || point === 2 || point === 3){
        initY = y2
        lengthY = selectHeight - (y2 - y1)
    }
    if (point === 3 || point === 6 || point === 9){
        lengthX = (x2 - x1)
    }
    if (point === 7 || point === 8 || point === 9){
        lengthY = (y2 - y1)
    }

    context.drawImage(canvas,x1,y1,width,height,initX,initY,lengthX,lengthY)

    if (rectangles === 'rects'){
        points = {
            1: [initX, initY],
            2: [initX + lengthX / 2, initY],
            3: [initX + lengthX, initY],

            4: [initX, initY + lengthY / 2],
            5: [initX + lengthX / 2, initY + lengthY / 2],
            6: [initX + lengthX, initY + lengthY / 2],

            7: [initX, initY + lengthY],
            8: [initX + lengthX / 2, initY + lengthY],
            9: [initX + lengthX, initY + lengthY]
        }

        drawRectBoundry()
    }

    if (selection === 'select'){
        selectX = initX
        selectY = initY
        selectWidth = lengthX
        selectHeight = lengthY
    }
}

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