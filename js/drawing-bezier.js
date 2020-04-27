class DrawingBezier extends PaintFunction{
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

        if (this.clickNum > 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum === 1){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            drawStraight(this.origX, this.origY, coord[0],coord[1], this.contextDraft);
        }
        else if (this.clickNum === 2){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier( this.midX, this.midY, coord[0], coord[1], this.contextDraft);

            drawDotted(this.origX, this.origY, this.midX, this.midY, this.contextDraft)
            drawDotted(this.finalX, this.finalY, coord[0], coord[1], this.contextDraft)
            drawRect(this.midX, this.midY, this.contextDraft)
            drawRect(coord[0], coord[1], this.contextDraft)
        }
        else if (this.clickNum === 3){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier(coord[0], coord[1], this.CPX1, this.CPY1, this.contextDraft);

            drawDotted(this.origX, this.origY, coord[0], coord[1], this.contextDraft)
            drawDotted(this.finalX, this.finalY, this.CPX1, this.CPY1, this.contextDraft)
            drawRect(this.CPX1, this.CPY1, this.contextDraft)
            drawRect(coord[0], coord[1], this.contextDraft)
        }
    }

    onMouseUp(coord,event){
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.lineJoin = curJoin;
        this.contextReal.lineWidth = curWidth;
        
        if (this.clickNum === 0) {
            this.origX = coord[0];
            this.origY = coord[1];

            this.clickNum++
            drawing = true
        }
        else if (this.clickNum === 1) {
            this.finalX = coord[0];
            this.finalY = coord[1];

            let [midX, midY] = midPoint(this.origX, this.origY, this.finalX, this.finalY)
            this.midX = midX;
            this.midY = midY;

            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier(this.midX, this.midY, coord[0], coord[1], this.contextDraft);
            this.clickNum++
        }
        else if (this.clickNum === 2) {
            this.CPX1 = coord[0];
            this.CPY1 = coord[1];

            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier(coord[0], coord[1], this.CPX1, this.CPY1, this.contextDraft);
            this.clickNum++
        }
        else if (this.clickNum === 3){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier(coord[0], coord[1], this.CPX1, this.CPY1, this.contextReal);
            this.clickNum = 0
            cPush()
        }
    }

    onMouseLeave(){}
    onMouseEnter(){}

    drawBezier(cpx1, cpy1, cpx2, cpy2, context){
        context.beginPath();
        context.moveTo(this.origX,this.origY);
        context.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, this.finalX, this.finalY)
        context.stroke();    
    }
}
