class DrawingMove extends PaintFunction{
    constructor(contextReal, contextDraft, contextSelect){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft; 
        this.contextSelect = contextSelect; 
        this.clickNum = 0
        this.point = 0          
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(coord, event){
        // If the user cancels the tool before moving the selection to a new place, redraw the selection to the real canvas
        if (this.clickNum === 1 && drawing === false){
            this.contextDraft.clearRect(0, 0, canvasWidth, canvasHeight);

            this.contextReal.drawImage(canvasSelect, this.origSelX, this.origSelX, selectWidth, selectHeight, this.origSelX, this.origSelX, selectWidth, selectHeight)
            resetSeletion()

            this.clickNum = 0
        }
        // Draw the new location of the selection to the real canvas
        else if (this.clickNum >= 2 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            // Sets the latest selection co-ordinates
            selectX = this.curSelX - this.origX + this.finalX
            selectY = this.curSelY - this.origY + this.finalY

            // Draws the selection to its new location on the draft canvas from the select canvas
            this.contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            this.contextReal.drawImage(canvasDraft, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight)
            
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            resetSeletion()

            this.clickNum = 0
            cPush()
        }
        // Draws the new location of the selection to the draft canvas
        else if (this.clickNum % 2 === 1){
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            // Sets the latest selection co-ordinates
            selectX = this.curSelX - this.origX + coord[0]
            selectY = this.curSelY - this.origY + coord[1]

            // Draws the selection to its new location on the draft canvas from the select canvas
            this.contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            setPoints(selectX, selectY, selectWidth, selectHeight)
    
            drawRectBoundry()
        }
    }
    onMouseUp(coord,event){
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
        // If the user picks any of the border points then activate the scale tool.
        if (this.point !== 5 && this.point !== 0){
            currentFunction = new DrawingScale(contextReal,contextDraft, contextSelect);

            setPoints(selectX, selectY, selectWidth, selectHeight)
            drawRectBoundry()
        }
        // On loading the tool
        else if (this.clickNum === 0) {
            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);

            // Record original selection points, key for ESC the action
            this.origSelX = selectX
            this.origSelY = selectY

            // Set the current selection points, these will change as the user moves the selection
            this.curSelX = selectX
            this.curSelY = selectY

            // Records the initial click
            this.origX = coord[0];
            this.origY = coord[1];
            drawing = true

            // Sets a white background for the selected area on the select canvas
            drawWhite(this.origSelX, this.origSelY, selectWidth, selectHeight, this.contextSelect)

            // Copies the selected area from real to select
            this.contextSelect.drawImage(canvasReal, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            // Displays it for the user
            this.contextDraft.drawImage(canvasReal, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            // Whites out the area from the real canvas
            drawWhite(this.origSelX, this.origSelY, selectWidth, selectHeight, this.contextReal)
        }

        // Resets the  variables to the users chosen new location
        else if (this.clickNum % 2 === 0){
            // Moves the selection to its new spot on the draft canvas
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            // Moves the selection from its old spot on the select canvas to its new spot
            this.contextSelect.clearRect(0, 0, canvasSelect.width, canvasSelect.height);
            this.contextSelect.drawImage(canvasDraft, selectX, selectY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            // Set the current selection points
            this.curSelX = selectX
            this.curSelY = selectY
            
            // Records the new original click (for the new location)
            this.origX = coord[0];
            this.origY = coord[1];
        }

        else if (this.clickNum % 2 === 1){
            // Sets final co-ordinates in case the user wants to cancel a following action
            this.finalX = coord[0]
            this.finalY = coord[1]

            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            // Sets the current selection points
            selectX = this.curSelX - this.origX + this.finalX
            selectY = this.curSelY - this.origY + this.finalY

            // Starts drafting the new position of the selection onto the draft canvas from the select canvas
            this.contextDraft.drawImage(canvasSelect, this.curSelX, this.curSelY, selectWidth, selectHeight, selectX, selectY, selectWidth, selectHeight)

            // Keeps the points up to date and the red rectangles shown
            setPoints(selectX, selectY, selectWidth, selectHeight)
            drawRectBoundry()
        }

        this.clickNum++
    }
    onMouseLeave(){}
    onMouseEnter(){}
}