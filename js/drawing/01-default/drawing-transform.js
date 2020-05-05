class DrawingTransform extends PaintFunction {
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
        // If the user cancels the tool before moving the selection to a new place, redraw the selection to the real canvas
        if (this.clickNum === 1 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasWidth, canvasHeight);

            this.contextReal.drawImage(canvasSelect, this.origSelX, this.origSelX, selectWidth, selectHeight, this.origSelX, this.origSelX, selectWidth, selectHeight)

            resetSeletion()

            this.clickNum = 0
            this.point = 0
        }
        // Draw the new location of the selection to the real canvas
        else if (this.clickNum >= 2 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            // Draws the selection to its new location on the draft canvas from the select canvas
            scaleImage(this.finalX, this.finalY, this.point, this.contextDraft, canvasSelect, '')
            
            // Draw the post-manipulated selection from the draft canvas to the real canvas
            this.contextReal.drawImage(canvasDraft, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight)
            
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            resetSeletion()

            this.clickNum = 0
            this.point = 0
            cPush()
        }
        else if (this.clickNum % 2 === 1 && this.point !== 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            // Manipulate the selection from the select canvas to the draft canvas
            scaleImage(coord[0], coord[1], this.point, this.contextDraft, canvasSelect, 'rects')
        }
    }

    onMouseUp(coord, event) {
        // On selection of the tool and every second click, reset the points being allocated so that the user can pick a new one.
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
            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            // Record original selection points, width and height, key for ESC the action
            this.origSelX = selectX
            this.origSelY = selectY
            this.origSelWidth = selectWidth
            this.origSelHeight = selectHeight
            drawing = true

            // Sets a white background for the selected area on the select canvas
            drawWhite(this.origSelX, this.origSelY, this.origSelWidth, this.origSelHeight, this.contextSelect)

            // Copies the selected area from real to select
            this.contextSelect.drawImage(canvasReal, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)
            
            // Displays it for the user
            this.contextDraft.drawImage(canvasReal, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            // Whites out the area from the real canvas
            drawWhite(this.origSelX, this.origSelY, selectWidth, selectHeight, this.contextReal)
        }
        else if (this.clickNum % 2 === 1 && this.point !== 0) {
            // Sets final co-ordinates in case the user wants to cancel a following action
            this.finalX = coord[0]
            this.finalY = coord[1]

            // Draws the new manipulation of the selection to the draft canvas from the pre-manipulated select canvas. Also sets the points for the selection.
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            scaleImage(coord[0], coord[1], this.point, this.contextDraft, canvasSelect, 'select')

            // Draws the post-manipulation back to the select canvas to be remanipulated again
            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);
            this.contextSelect.drawImage(canvasDraft, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            // Redraws the image back to the draft canvas with the red rectangles, which didn't want to be passed to the select canvas previously
            scaleImage(coord[0], coord[1], this.point, this.contextDraft, canvasSelect, 'rects')
        }
        this.clickNum++
    }
    onMouseLeave() { }
    onMouseEnter() { }
}