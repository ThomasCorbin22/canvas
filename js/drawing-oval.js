$('#drawing-oval').click(() => {
    currentFunction = new DrawingOval(contextReal, contextDraft);
});

class DrawingOval extends PaintFunction {
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

        if (this.clickNum != 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum === 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            drawStraight(this.origX, this.origY, coord[0], coord[1], this.contextDraft);
        }
        else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawOval(this.finalX, this.finalY, coord[0], coord[1], this.contextDraft)
        }
    }
    onMouseUp(coord, event) {
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.fillStyle = curFill;
        this.contextReal.lineWidth = curWidth;

        if (this.clickNum === 0) {
            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++;
            drawing = true
        }
        else if (this.clickNum === 1) {
            this.finalX = coord[0];
            this.finalY = coord[1];

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawOval(this.finalX, this.finalY, coord[0], coord[1], this.contextDraft);
            this.clickNum++
        }
        else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawOval(this.finalX, this.finalY, coord[0], coord[1], this.contextReal);
            this.clickNum = 0;
            cPush()
        }
    }

    onMouseLeave() { }
    onMouseEnter() { }

    calcRotation(x1, y1, x2, y2) {
        let diffX01 = x1 - x2;
        let diffY01 = y1 - y2;

        let angle = Math.atan(diffY01/diffX01);

        return angle
    }

    drawOval(x1, y1, x2, y2, context) {
        context.beginPath();
        let radius01 = getChordLength(this.origX, this.origY, x1, y1)
        let radius02 = getChordLength(this.origX, this.origY, x2, y2)
        context.ellipse(this.origX, this.origY, radius01, radius02, this.calcRotation(this.origX, this.origY, x1, y1), 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
}