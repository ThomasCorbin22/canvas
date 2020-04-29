class DrawingStamp extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;
        this.clickNum = 0          
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(coord,event){
        if (this.clickNum != 0 && drawing === false) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum != 0){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(coord[0],coord[1], this.contextDraft);
        }
    }
    onMouseUp(coord,event){
        if (this.clickNum === 0) {
            this.clickNum++
            drawing = true
        }

        else if (this.clickNum === 1){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(coord[0],coord[1], this.contextReal);
            cPush()
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y, context){
        let image = new Image();   // Create new img element
        image.src = stampImg
        image.onload = function(){
            context.drawImage(image, x - stampSize / 2, y - stampSize / 2, stampSize, stampSize)
        }
    }
}