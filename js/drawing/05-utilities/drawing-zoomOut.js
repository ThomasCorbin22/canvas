class DrawingZoomOut extends PaintFunction{
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
        if (zoomIn === true) {
            // Reset canvas variables back to real
            canvasReal = document.getElementById('canvas-real');
            contextReal = canvasReal.getContext('2d');
            canvasDraft = document.getElementById('canvas-draft');
            contextDraft = canvasDraft.getContext('2d');
            canvasSelect = document.getElementById('canvas-select');
            contextSelect = canvasDraft.getContext('2d');
            canvasWidth = canvasWidth / 3
            canvasHeight = canvasHeight / 3
    
            // Draw zoom canvas back to the real canvas
            contextReal.drawImage(canvasZoomReal, zoomX, zoomY, canvasWidth * 2, canvasHeight * 2, 0, 0, canvasWidth, canvasHeight)

            // Show the real canvases and hide the zoom canvases
            $('#canvas-zoom-real').hide()
            $('#canvas-zoom-draft').hide()
            $('#canvas-real').show()
            $('#canvas-draft').show()
    
            // Reset the point saved on Zoom In click
            zoomX = 0
            zoomY = 0
    
            zoomIn = false
            cPush()
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}
}