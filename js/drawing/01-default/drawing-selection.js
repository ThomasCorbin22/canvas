class DrawingSelection extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
    }

    onMouseDown() { }
    onDragging() { }

    onMouseMove(coord, event) {
        this.contextDraft.save()
        this.contextDraft.strokeStyle = "rgba(255, 0, 0, 1)"
        this.contextDraft.lineWidth = 2;
        this.contextDraft.setLineDash([3, 3]);

        if (this.clickNum != 0 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)
        }
        this.contextDraft.restore()
    }

    onMouseUp(coord, event) {
        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            
            this.origX = coord[0];
            this.origY = coord[1];

            this.clickNum++
            drawing = true
        }

        else if (this.clickNum === 1) {
            this.contextDraft.save()
            this.contextDraft.strokeStyle = "rgba(255, 0, 0, 1)"
            this.contextDraft.lineWidth = 2;
            this.contextDraft.setLineDash([3, 3]);

            selecting = true
            selectX = this.origX
            selectY = this.origY
            selectWidth = coord[0] - this.origX
            selectHeight = coord[1] - this.origY

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.strokeRect(selectX, selectY, selectWidth, selectHeight)
            this.clickNum = 0
            this.contextDraft.restore()
        }
    }
    onMouseLeave() { }
    onMouseEnter() { }
}