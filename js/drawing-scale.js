class DrawingScale extends PaintFunction {
    constructor(contextReal, contextDraft, contextSelect) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextSelect = contextSelect;
        this.clickNum = 0
        this.point = 0
    }

    onMouseDown() { }
    onDragging() { }
    onMouseMove(coord, event) {
        if (this.clickNum === 1 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasWidth, canvasHeight);

            this.contextReal.drawImage(canvasSelect, this.origSelX, this.origSelX, selectWidth, selectHeight, this.origSelX, this.origSelX, selectWidth, selectHeight)

            resetSeletion()

            this.clickNum = 0
            this.point = 0
        }
        else if (this.clickNum >= 2 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            scaleImage(this.finalX, this.finalY, this.point, this.contextDraft, canvasSelect, '')
            
            this.contextReal.drawImage(canvasDraft, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight)
            
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            resetSeletion()

            this.clickNum = 0
            this.point = 0
            cPush()
        }
        else if (this.clickNum % 2 === 1 && this.point !== 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            scaleImage(coord[0], coord[1], this.point, this.contextDraft, canvasSelect, 'rects')
        }
    }

    onMouseUp(coord, event) {
        if (this.clickNum % 2 === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            console.log(points[2][0])
            console.log(points[2][1])
            console.log(coord[0])
            console.log(coord[1])

            this.point = 0

            if (isClosed(coord[0], coord[1], points[1][0], points[1][1])) { this.point = 1 }
            else if (isClosed(coord[0], coord[1], points[2][0], points[2][1])) { this.point = 2 }
            else if (isClosed(coord[0], coord[1], points[3][0], points[3][1])) { this.point = 3 }
            else if (isClosed(coord[0], coord[1], points[4][0], points[4][1])) { this.point = 4 }
            else if (isClosed(coord[0], coord[1], points[5][0], points[5][1])) { this.point = 5 }
            else if (isClosed(coord[0], coord[1], points[6][0], points[6][1])) { this.point = 6 }
            else if (isClosed(coord[0], coord[1], points[7][0], points[7][1])) { this.point = 7 }
            else if (isClosed(coord[0], coord[1], points[8][0], points[8][1])) { this.point = 8 }
            else if (isClosed(coord[0], coord[1], points[9][0], points[9][1])) { this.point = 9 }

            console.log(this.point)
        }

        if (this.clickNum === 0 && this.point !== 0) {
            this.origSelX = selectX
            this.origSelY = selectY
            this.origSelWidth = selectWidth
            this.origSelHeight = selectHeight
            drawing = true

            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            drawWhite(this.origSelX, this.origSelY, this.origSelWidth, this.origSelHeight, this.contextSelect)

            this.contextSelect.drawImage(canvasReal, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            this.contextDraft.drawImage(canvasReal, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            drawWhite(this.origSelX, this.origSelY, selectWidth, selectHeight, this.contextReal)
        }
        else if (this.clickNum % 2 === 1 && this.point !== 0) {
            this.finalX = coord[0]
            this.finalY = coord[1]

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            
            scaleImage(coord[0], coord[1], this.point, this.contextDraft, canvasSelect, 'select')

            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            this.contextSelect.drawImage(canvasDraft, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            scaleImage(coord[0], coord[1], this.point, this.contextDraft, canvasSelect, 'rects')
        }
        this.clickNum++
    }
    onMouseLeave() { }
    onMouseEnter() { }
}