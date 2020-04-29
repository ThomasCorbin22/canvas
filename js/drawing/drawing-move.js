class DrawingMove extends PaintFunction{
    constructor(contextReal, contextDraft, contextSelect){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        this.contextSelect = contextSelect; 
        this.clickNum = 0
        this.point = 0          
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(coord, event){
        if (this.clickNum === 1 && drawing === false){
            this.contextDraft.clearRect(0, 0, canvasWidth, canvasHeight);

            this.contextReal.drawImage(canvasSelect, this.origSelX, this.origSelX, selectWidth, selectHeight, this.origSelX, this.origSelX, selectWidth, selectHeight)
            resetSeletion()

            this.clickNum = 0
        }
        else if (this.clickNum >= 2 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            selectX = this.curSelX - this.origX + this.finalX
            selectY = this.curSelY - this.origY + this.finalY

            this.contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            this.contextReal.drawImage(canvasDraft, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight)
            
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            resetSeletion()

            this.clickNum = 0
            cPush()
        }
        else if (this.clickNum % 2 === 1){
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            selectX = this.curSelX - this.origX + coord[0]
            selectY = this.curSelY - this.origY + coord[1]

            this.contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            setPoints(selectX, selectY, selectWidth, selectHeight)
    
            drawRectBoundry()
        }
    }
    onMouseUp(coord,event){
        if (this.clickNum % 2 === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            this.point = 0

            if (isClosed(coord[0], coord[1], points[1][0], points[1][1])) { this.point = 1 }
            else if (isClosed(coord[0], coord[1], points[2][0], points[2][1])) { this.point = 2 }
            else if (isClosed(coord[0], coord[1], points[3][0], points[3][1])) { this.point = 3 }
            else if (isClosed(coord[0], coord[1], points[4][0], points[4][1])) { this.point = 4 }
            else if (isClosed(coord[0], coord[1], points[5][0], points[5][1])) { this.point = 5 }
            else if (isClosed(coord[0], coord[1], points[6][0], points[6][1])) { this.point = 6 }
            else if (isClosed(coord[0], coord[1], points[7][0], points[7][1])) { this.point = 7 }
            else if (isClosed(coord[0], coord[1], points[8][0], points[8][1])) { this.point = 8 }
            else if (isClosed(coord[0], coord[1], points[9][0], points[9][1])) { this.point = 9 }
        }
        if (this.point !== 5 && this.point !== 0){
            currentFunction = new DrawingScale(contextReal,contextDraft, contextSelect);

            setPoints(selectX, selectY, selectWidth, selectHeight)
            drawRectBoundry()
        }
        else if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            this.origSelX = selectX
            this.origSelY = selectY

            this.curSelX = selectX
            this.curSelY = selectY

            this.origX = coord[0];
            this.origY = coord[1];
            drawing = true

            drawWhite(this.origSelX, this.origSelY, selectWidth, selectHeight, this.contextSelect)

            this.contextSelect.drawImage(canvasReal, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            drawWhite(this.origSelX, this.origSelY, selectWidth, selectHeight, this.contextReal)
        }

        else if (this.clickNum % 2 === 0){
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            this.contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            this.contextSelect.drawImage(canvasDraft, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            this.curSelX = selectX
            this.curSelY = selectY
            
            this.origX = coord[0];
            this.origY = coord[1];
        }

        else if (this.clickNum % 2 === 1){
            this.finalX = coord[0]
            this.finalY = coord[1]

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            selectX = this.curSelX - this.origX + this.finalX
            selectY = this.curSelY - this.origY + this.finalY

            this.contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            setPoints(selectX, selectY, selectWidth, selectHeight)

            drawRectBoundry()
        }

        this.clickNum++
    }
    onMouseLeave(){}
    onMouseEnter(){}
}