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
        if (this.clickNum != 0 && drawing === false){

            if (selecting === false){
                this.contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
            }
            
            contextReal.drawImage(canvasDraft,0,0,canvasWidth,canvasHeight,0,0,canvasWidth,canvasHeight)

            this.clickNum = 0
            $('#canvas-real').show()
            selecting = false
            selectX = 0
            selectY = 0
            selectWidth = canvasWidth
            selectHeight = canvasHeight
            cPush()
        }
        else if (this.clickNum % 2 === 1){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            
            if (selecting === true) {
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(selectX,selectY,selectWidth,selectHeight);
                this.contextDraft.restore()
            }

            contextDraft.drawImage(canvasReal,selectX,selectY,selectWidth,selectHeight,coord[0] - this.origX + selectX,coord[1] - this.origY + selectY,selectWidth,selectHeight)
        }
    }
    onMouseUp(coord,event){
        if (this.clickNum === 0) {
            this.origX = coord[0];
            this.origY = coord[1];
            drawing = true
            if (selecting === false){
                $('#canvas-real').hide()
            }
        }

        else if (this.clickNum % 2 === 1) {

            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            
            if (selecting === true) {
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(selectX,selectY,selectWidth,selectHeight);
                this.contextDraft.restore()
            }

            contextDraft.drawImage(canvasReal,selectX,selectY,selectWidth,selectHeight,coord[0] - this.origX + selectX,coord[1] - this.origY + selectY,selectWidth,selectHeight)
        }
        
        this.clickNum++
    }
    onMouseLeave(){}
    onMouseEnter(){}
}