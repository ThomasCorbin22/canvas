$('#drawing-circle').click(() => {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
});

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

        if (this.clickNum != 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawCenter(coord[0], coord[1], this.contextDraft);
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
        else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawCenter(coord[0], coord[1], this.contextReal);
            this.clickNum = 0;
            cPush()
        }
    }

    onMouseLeave() { }
    onMouseEnter() { }

    radiusCircle(x, y) {
        let diffX = this.origX - x;
        let diffY = this.origY - y;
        let radiusSquare = Math.pow(diffX, 2) + Math.pow(diffY, 2);
        let radius = Math.pow(radiusSquare, 0.5);
        return radius;
    }

    drawCenter(x, y, context) {
        context.beginPath();
        let radius = this.radiusCircle(x, y)
        context.arc(this.origX, this.origY, radius, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
}