class DrawingQuadratic extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
    }

    onMouseDown() { }

    onDragging() { }

    onMouseMove(coord, event) {
        this.contextDraft.strokeStyle = curStroke;
        this.contextDraft.lineJoin = curJoin;
        this.contextDraft.lineWidth = curWidth;

        if (this.clickNum > 0 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum === 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            drawStraight(this.origX, this.origY, coord[0], coord[1], this.contextDraft);
        }
        else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawQuad(coord[0], coord[1], this.contextDraft);
            drawDotted(this.origX, this.origY, coord[0], coord[1], this.contextDraft)
            drawDotted(this.finalX, this.finalY, coord[0], coord[1], this.contextDraft)
            drawRect(coord[0], coord[1], this.contextDraft)
        }
    }

    onMouseUp(coord, event) {
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.lineJoin = curJoin;
        this.contextReal.lineWidth = curWidth;

        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            
            this.origX = coord[0];
            this.origY = coord[1];

            this.clickNum++
            drawing = true
        }
        else if (this.clickNum === 1) {
            this.finalX = coord[0];
            this.finalY = coord[1];

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawQuad(coord[0], coord[1], this.contextDraft);
            this.clickNum++
        }
        else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawQuad(coord[0], coord[1], this.contextReal);
            this.clickNum = 0
            cPush()
        }
    }

    onMouseLeave() { }
    onMouseEnter() { }

    drawQuad(cpx, cpy, context) {
        context.beginPath();
        context.moveTo(this.origX, this.origY);
        context.quadraticCurveTo(cpx, cpy, this.finalX, this.finalY)
        context.stroke();
    }
}