class DrawingScale extends PaintFunction {
    constructor(contextReal, contextDraft) {
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

            selecting = false
            selectX = 0
            selectY = 0
            selectWidth = canvasWidth
            selectHeight = canvasHeight

            this.clickNum = 0
            this.point = 0
            $('#canvas-real').show()
        }
        else if (this.clickNum >= 2 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            if (selecting === true) {
                this.contextReal.save()
                this.contextReal.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextReal.fillRect(this.origSelX, this.origSelY, this.origSelWidth, this.origSelHeight);
                this.contextReal.restore()
            }
            else {
                this.contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
            }

            scaleImage(selectX, selectY, this.finalX, this.finalY, selectWidth, selectHeight, this.point, contextDraft, canvasSelect, '', '')
            
            contextReal.drawImage(canvasDraft, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight)
            
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            selecting = false
            selectX = 0
            selectY = 0
            selectWidth = canvasWidth
            selectHeight = canvasHeight

            this.clickNum = 0
            this.point = 0
            $('#canvas-real').show()
            cPush()
        }
        else if (this.clickNum % 2 === 1 && this.point !== 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            if (selecting === true) {
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(this.origSelX, this.origSelY, this.origSelWidth, this.origSelHeight);
                this.contextDraft.restore()
            }

            scaleImage(selectX, selectY, coord[0], coord[1], selectWidth, selectHeight, this.point, contextDraft, canvasSelect, 'rects', '')
        }
    }

    onMouseUp(coord, event) {
        if (this.clickNum % 2 === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
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
        }

        if (this.clickNum === 0 && this.point !== 0) {
            this.origSelX = selectX
            this.origSelY = selectY
            this.origSelWidth = selectWidth
            this.origSelHeight = selectHeight
            drawing = true

            if (selecting === false) {
                $('#canvas-real').hide()
            }
            
            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            this.contextSelect.save()
            this.contextSelect.fillStyle = "rgba(255, 255, 255, 1)"
            this.contextSelect.fillRect(this.origSelX, this.origSelY, this.origSelWidth, this.origSelHeight);
            this.contextSelect.restore()

            contextSelect.drawImage(canvasReal, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)
        }
        else if (this.clickNum % 2 === 1 && this.point !== 0) {
            this.finalX = coord[0]
            this.finalY = coord[1]

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            if (selecting === true) {
                this.contextDraft.save()
                this.contextDraft.fillStyle = "rgba(255, 255, 255, 1)"
                this.contextDraft.fillRect(this.origSelX, this.origSelY, this.origSelWidth, this.origSelHeight);
                this.contextDraft.restore()
            }
            
            scaleImage(selectX, selectY, coord[0], coord[1], selectWidth, selectHeight, this.point, contextDraft, canvasSelect, '', 'select')

            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            contextSelect.drawImage(canvasDraft, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            scaleImage(selectX, selectY, coord[0], coord[1], selectWidth, selectHeight, this.point, contextDraft, canvasSelect, 'rects', '')
        }
        this.clickNum++
    }
    onMouseLeave() { }
    onMouseEnter() { }
}