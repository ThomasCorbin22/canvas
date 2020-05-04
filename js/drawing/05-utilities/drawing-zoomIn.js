class DrawingZoomIn extends PaintFunction{
    constructor(contextReal, contextDraft, contextSelect){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;            
        this.contextSelect = contextSelect;            
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(coord,event){
        if (zoomIn === false){
            // Clear the draft canvas
            contextDraft.clearRect(0, 0, contextDraft.canvas.width, contextDraft.canvas.height);

            // Clear zoom canvases beforehand
            contextZoomReal.clearRect(0, 0, contextZoomReal.canvas.width, contextZoomReal.canvas.height);
            contextZoomDraft.clearRect(0, 0, contextZoomReal.canvas.width, contextZoomReal.canvas.height);
            
            // Draw the real canvas to the zoom canvas
            contextZoomReal.drawImage(canvasReal,0,0,canvasWidth,canvasHeight,canvasWidth - coord[0],canvasHeight - coord[1],canvasWidth * 2,canvasHeight * 2)

            // Show the zoom canvas and hide the real
            $('#canvas-zoom-real').show()
            $('#canvas-zoom-draft').show()
            $('#canvas-real').hide()
            $('#canvas-draft').hide()

            // Remember the co-ordinates of the click to transform back to real canvas later
            zoomX = canvasWidth - coord[0]
            zoomY = canvasHeight - coord[1]

            // Set variables to the zoom canvas
            canvasReal = canvasZoomReal;
            contextReal = contextZoomReal;
            canvasDraft = canvasZoomDraft;
            contextDraft = contextZoomDraft;
            canvasSelect = canvasZoomSelect;
            contextSelect = contextZoomSelect;
            canvasWidth = canvasWidth * 3
            canvasHeight = canvasHeight * 3
            selectWidth = canvasWidth
            selectHeight = canvasHeight

            zoomIn = true
            cPush()
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}
}