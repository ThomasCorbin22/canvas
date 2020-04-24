$('#drawing-zoomIn').click(() => {
    currentFunction = new DrawingZoomIn(contextReal,contextDraft);
});

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
            contextZoomReal.drawImage(
                //Element to draw to zoomCanvas
                canvasReal, 
                // X-axis coordinate of the realCanvas to draw from
                0,
                // Y-axis coordinate of the realCanvas to draw from
                0,
                // Width of the realCanvas to draw from
                canvasWidth, 
                // Height of the realCanvas to draw from
                canvasHeight, 
                // X-axis coordinate of the zoomCanvas to draw to
                canvasWidth - coord[0], 
                // Y-axis coordinate of the zoomCanvas to draw to
                canvasHeight - coord[1], 
                // Width to draw the image on the zoomCanvas
                canvasWidth * 2,
                // Height to draw the image on the zoomCanvas
                canvasHeight * 2
            )

            $('#canvas-zoom-real').show()
            $('#canvas-zoom-draft').show()
            
            $('#canvas-real').hide()
            $('#canvas-draft').hide()

            zoomX = canvasWidth - coord[0]
            zoomY = canvasHeight - coord[1]
            zoomIn = true
            cPush()
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}
}