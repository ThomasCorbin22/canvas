$('#drawing-quadratic').click(() => {
    currentFunction = new DrawingQuadraticLine(contextReal, contextDraft);
});

class DrawingQuadraticLine extends PaintFunction {
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
            this.drawStraight(coord[0], coord[1], this.contextDraft);
        }
        else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawQuad(coord[0], coord[1], this.contextDraft);
            this.drawDotted(this.origX, this.origY, coord[0], coord[1], this.contextDraft)
            this.drawDotted(this.finalX, this.finalY, coord[0], coord[1], this.contextDraft)
            this.drawRect(coord[0], coord[1], this.contextDraft)
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

    drawStraight(x, y, context) {
        context.beginPath();
        context.moveTo(this.origX, this.origY);
        context.lineTo(x, y);
        context.stroke();
    }

    drawQuad(cpx, cpy, context) {
        context.beginPath();
        context.moveTo(this.origX, this.origY);
        context.quadraticCurveTo(cpx, cpy, this.finalX, this.finalY)
        context.stroke();
    }

    drawDotted(x, y, cpx, cpy, context) {
        context.save()
        context.strokeStyle = "rgba(255, 0, 0, 1)"
        context.lineWidth = 2;
        context.setLineDash([3, 3]);
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(cpx, cpy);
        context.stroke();
        context.restore()
    }

    drawRect(cpx, cpy, context) {
        context.save()
        context.fillStyle = "rgba(255, 0, 0, 1)"
        context.fillRect(cpx - 5, cpy - 5, 10, 10)
        context.restore()
    }
}