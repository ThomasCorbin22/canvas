$('#drawing-arc').click(() => {
    currentFunction = new DrawingArc(contextReal, contextDraft);
});

class DrawingArc extends PaintFunction {
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
            this.drawArc(coord[0], coord[1], this.contextDraft);
            
            drawDotted(this.origX, this.origY, this.cpx1, this.cpy1, this.contextDraft)
            drawDotted(this.cpx1, this.cpy1, coord[0], coord[1], this.contextDraft)
            drawRect(this.cpx1, this.cpy1, this.contextDraft)
        }
    }

    onMouseUp(coord, event) {
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
            this.cpx1 = coord[0];
            this.cpy1 = coord[1];

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawArc(coord[0], coord[1], this.contextDraft);
            this.clickNum++
        }
        else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawArc(coord[0], coord[1], this.contextReal);
            this.clickNum = 0
            cPush()
        }
    }

    onMouseLeave() { }
    onMouseEnter() { }

    drawArc(x, y, context) {
        context.beginPath();
        context.moveTo(this.origX, this.origY);
        context.arcTo(this.cpx1, this.cpy1, x, y, getChordLength(this.cpx1, this.cpy1, this.origX, this.origY, x, y))
        context.lineTo(x, y)
        context.stroke();
    }
}