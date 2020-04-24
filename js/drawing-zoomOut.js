$('#drawing-zoomOut').click(() => {
    currentFunction = new DrawingZoomOut(contextReal,contextDraft);
    if (zoomIn === true){
        contextReal.drawImage(
            //Element to draw to realCanvas
            canvasZoomReal, 
            // X-axis coordinate of the zoomCanvas to draw from
            zoomX,
            // Y-axis coordinate of the zoomCanvas to draw from
            zoomY,
            // Width of the zoomCanvas to draw from
            canvasWidth * 2, 
            // Height of the zoomCanvas to draw from
            canvasHeight * 2, 
            // X-axis coordinate of the realCanvas to draw to
            0, 
            // Y-axis coordinate of the realCanvas to draw to
            0, 
            // Width to draw the image on the realCanvas
            canvasWidth,
            // Height to draw the image on the realCanvas
            canvasHeight
        )

        contextZoomReal.clearRect(0, 0, contextZoomReal.canvas.width, contextZoomReal.canvas.height);
        $('#canvas-zoom-real').hide()
        $('#canvas-zoom-draft').hide()
        
        $('#canvas-real').show()
        $('#canvas-draft').show()

        zoomIn = false
        cPush()
    }
});

class DrawingZoomOut extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}