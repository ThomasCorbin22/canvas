class DrawingStar extends PaintFunction {
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
        this.contextDraft.lineJoin = curJoin;
        this.contextDraft.lineWidth = curWidth;
        this.contextDraft.fillStyle = curFill;
        this.contextDraft.setLineDash(linetype);

        if (this.clickNum != 0 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum === 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.strokeStar(this.origX, this.origY, getChordLength(this.origX, this.origY, coord[0], coord[1]), sliderNum, 1, this.contextDraft)
        }
        else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.strokeStar(this.origX, this.origY, getChordLength(this.origX, this.origY, this.finalX, this.finalY), sliderNum, getChordLength(this.origX, this.origY, coord[0], coord[1])/200, this.contextDraft)
        }
    }

    onMouseUp(coord, event) {
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.lineJoin = curJoin;
        this.contextReal.lineWidth = curWidth;
        this.contextReal.fillStyle = curFill;
        this.contextReal.setLineDash(linetype);

        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++
            drawing = true
        }
        else if (this.clickNum === 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            this.finalX = coord[0]
            this.finalY = coord[1]

            this.strokeStar(this.origX, this.origY, getChordLength(this.origX, this.origY, this.finalX, this.finalY), sliderNum, getChordLength(this.finalX, this.finalY, coord[0], coord[1])/200, this.contextDraft)
            
            this.clickNum++
        }
        else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.strokeStar(this.origX, this.origY, getChordLength(this.origX, this.origY, this.finalX, this.finalY), sliderNum, getChordLength(this.origX, this.origY, coord[0], coord[1])/200, this.contextReal)
            this.clickNum = 0
            cPush()
        }
    }

    onMouseLeave() { }
    onMouseEnter() { }

    strokeStar(x, y, radius, sides, inset, context) {
        context.save();
        context.beginPath();
        context.translate(x, y);
        context.moveTo(0, 0 - radius);
        for (let i = 0; i < sides; i++) {
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - (radius * inset));
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius);
        }
        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
    }
}