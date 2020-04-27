class DrawingZoomIn extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(coord,event){
        if (zoomIn === false){
            contextZoomReal.drawImage(canvasReal,0,0,canvasWidth,canvasHeight,canvasWidth - coord[0],canvasHeight - coord[1],canvasWidth * 2,canvasHeight * 2)

            contextDraft.clearRect(0, 0, contextDraft.canvas.width, contextDraft.canvas.height);

            $('#canvas-zoom-real').show()
            $('#canvas-zoom-draft').show()
            $('#canvas-real').hide()
            $('#canvas-draft').hide()

            canvasReal = canvasZoomReal;
            contextReal = contextZoomReal;
            canvasDraft = canvasZoomDraft;
            contextDraft = contextZoomDraft;

            zoomX = canvasWidth - coord[0]
            zoomY = canvasHeight - coord[1]

            canvasWidth = canvasWidth * 3
            canvasHeight = canvasHeight * 3

            zoomIn = true
            cPush()
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}
}