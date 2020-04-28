class DrawingCircle extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
    }
    onMouseDown() { }

    onDragging() { }

    onMouseMove(coord, event) {

        this.contextDraft.strokeStyle = curStroke;
        this.contextDraft.fillStyle = curFill;
        this.contextDraft.lineWidth = curWidth;
        this.contextDraft.setLineDash(linetype);

        if (this.clickNum != 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawCircle(coord[0], coord[1], this.contextDraft);
        }
    }
    onMouseUp(coord, event) {
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.fillStyle = curFill;
        this.contextReal.lineWidth = curWidth;
        this.contextReal.setLineDash(linetype);

        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            
            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++;
            drawing = true
        }
        else if (this.clickNum != 0) {

            
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawCircle(coord[0], coord[1], this.contextReal);
            this.clickNum = 0;
            cPush()
        }
    }

    onMouseLeave() { }
    onMouseEnter() { }

    drawCircle(x, y, context) {
        context.beginPath();
        let radius = getChordLength(this.origX, this.origY, x, y)
        context.arc(this.origX, this.origY, radius, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
}