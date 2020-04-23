$('#drawing-selection').click(() => {
    currentFunction = new DrawingSection(contextReal, contextDraft);
});

class DrawingSection extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
    }

    onMouseDown() { }
    onDragging() { }

    onMouseMove(coord, event) {
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
    }

    onMouseUp(coord, event) {
        if (this.clickNum === 0) {
            this.origX = coord[0];
            this.origY = coord[1];

            // selOrigX = 0
            // selOrigY = 0
            // selWidth = 0
            // selHeight = 0

            this.clickNum++
            drawing = true
        }

        else if (this.clickNum === 1) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)

            // selOrigX = this.origX
            // selOrigY = this.origY
            // selWidth = coord[0] - this.origX
            // selHeight = coord[1] - this.origY

            // march();

            this.clickNum = 0
        }
    }
    onMouseLeave() { }
    onMouseEnter() { }
}

// function draw() {
//     contextDraft.clearRect(0, 0, canvasWidth, canvasHeight);
//     contextDraft.lineDashOffset = -curOffset;
//     contextDraft.strokeRect(selOrigX, selOrigY, selWidth, selHeight);
// }

// function march() {
//     curOffset++;
//     if (curOffset > 16) {
//         curOffset = 0;
//     }
//     draw();
//     setTimeout(march, 20);
// }