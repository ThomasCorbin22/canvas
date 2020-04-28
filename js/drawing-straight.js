class DrawingStraightLine extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
    }
    
    onMouseDown(){}

    onDragging(){}

    onMouseMove(coord,event){
        this.contextDraft.strokeStyle = curStroke;
        this.contextDraft.lineJoin = curJoin;
        this.contextDraft.lineWidth = curWidth;
        this.contextDraft.setLineDash(linetype);

        if (this.clickNum != 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum != 0){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            drawStraight(this.origX, this.origY, coord[0],coord[1], this.contextDraft);
        }
    }

    onMouseUp(coord,event){
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.lineJoin = curJoin;
        this.contextReal.lineWidth = curWidth;
        this.contextReal.setLineDash(linetype);
        
        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            
            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++
            drawing = true
        }
        else if (this.clickNum === 1) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            drawStraight(this.origX, this.origY, coord[0],coord[1], this.contextReal);
            this.clickNum = 0
            cPush()
        }
    }

    onMouseLeave(){}
    onMouseEnter(){}
}