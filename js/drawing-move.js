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
        if (this.clickNum === 0 && drawing === false){
            this.contextDraft.clearRect(0, 0, canvasWidth, canvasHeight);

            selecting = false
            selectX = 0
            selectY = 0
            selectWidth = canvasWidth
            selectHeight = canvasHeight

            this.clickNum = 0
            this.point = 0
            $('#canvas-real').show()
        }
        else if (this.clickNum >= 2 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            if (selecting === true) {
                this.contextReal.save()
                this.contextReal.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextReal.fillRect(this.origSelX, this.origSelY, selectWidth, selectHeight);
                this.contextReal.restore()
            }
            else {
                this.contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
            }

            selectX = this.curSelX - this.origX + this.finalX
            selectY = this.curSelY - this.origY + this.finalY

            contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            contextReal.drawImage(canvasDraft, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight)
            
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

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
        else if (this.clickNum % 2 === 1){
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            if (selecting === true) {
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(this.origSelX, this.origSelY, selectWidth, selectHeight);
                this.contextDraft.restore()
            }

            selectX = this.curSelX - this.origX + coord[0]
            selectY = this.curSelY - this.origY + coord[1]

            contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            points = {
                1: [selectX, selectY],
                2: [selectX + selectWidth / 2, selectY],
                3: [selectX + selectWidth, selectY],
    
                4: [selectX, selectY + selectHeight / 2],
                5: [selectX + selectWidth / 2, selectY + selectHeight / 2],
                6: [selectX + selectWidth, selectY + selectHeight / 2],
    
                7: [selectX, selectY + selectHeight],
                8: [selectX + selectWidth / 2, selectY + selectHeight],
                9: [selectX + selectWidth, selectY + selectHeight]
            }
    
            drawRectBoundry()
        }
    }
    onMouseUp(coord,event){
        if (this.clickNum === 0) {
            this.origSelX = selectX
            this.origSelY = selectY

            this.curSelX = selectX
            this.curSelY = selectY

            this.origX = coord[0];
            this.origY = coord[1];
            drawing = true

            if (selecting === false){
                $('#canvas-real').hide()
            }

            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            this.contextSelect.save()
            this.contextSelect.fillStyle = "rgba(255, 255, 255, 1)"
            this.contextSelect.fillRect(this.origSelX, this.origSelY, this.origSelWidth, this.origSelHeight);
            this.contextSelect.restore()

            contextSelect.drawImage(canvasReal, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)
        }

        else if (this.clickNum % 2 === 0){
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            if (selecting === true) {
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(this.origSelX, this.origSelY, selectWidth, selectHeight);
                this.contextDraft.restore()
            }

            contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            contextSelect.drawImage(canvasDraft, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            this.curSelX = selectX
            this.curSelY = selectY
            
            this.origX = coord[0];
            this.origY = coord[1];
        }

        else if (this.clickNum % 2 === 1){
            this.finalX = coord[0]
            this.finalY = coord[1]

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            if (selecting === true) {
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(this.origSelX, this.origSelY, selectWidth, selectHeight);
                this.contextDraft.restore()
            }

            selectX = this.curSelX - this.origX + this.finalX
            selectY = this.curSelY - this.origY + this.finalY

            contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            points = {
                1: [selectX, selectY],
                2: [selectX + selectWidth / 2, selectY],
                3: [selectX + selectWidth, selectY],
    
                4: [selectX, selectY + selectHeight / 2],
                5: [selectX + selectWidth / 2, selectY + selectHeight / 2],
                6: [selectX + selectWidth, selectY + selectHeight / 2],
    
                7: [selectX, selectY + selectHeight],
                8: [selectX + selectWidth / 2, selectY + selectHeight],
                9: [selectX + selectWidth, selectY + selectHeight]
            }
    
            drawRectBoundry()
        }

        this.clickNum++
    }
    onMouseLeave(){}
    onMouseEnter(){}
}