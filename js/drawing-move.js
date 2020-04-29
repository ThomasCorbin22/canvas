class DrawingMove extends PaintFunction{
    constructor(contextReal, contextDraft, contextSelect){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        this.contextSelect = contextSelect; 
        this.clickNum = 0               
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
        if (this.clickNum === 0) {
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