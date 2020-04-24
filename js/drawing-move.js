$('#drawing-move').click(() => {
    currentFunction = new DrawingMove(contextReal,contextDraft);
});

class DrawingMove extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft; 
        this.clickNum = 0               
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(coord, event){
        if (this.clickNum != 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.clickNum = 0
            $('#canvas-real').show()
        }
        else if (this.clickNum != 0){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);

            contextDraft.drawImage(
                //Element to draw to draftCanvas
                canvasReal, 
                // X-axis coordinate of the realCanvas to draw from
                0,
                // Y-axis coordinate of the realCanvas to draw from
                0,
                // Width of the realCanvas to draw from
                canvasWidth, 
                // Height of the realCanvas to draw from
                canvasHeight, 
                // X-axis coordinate of the draftCanvas to draw to
                coord[0] - this.origX, 
                // Y-axis coordinate of the draftCanvas to draw to
                coord[1] - this.origY, 
                // Width to draw the image on the draftCanvas
                canvasWidth,
                // Height to draw the image on the draftCanvas
                canvasHeight
            )
        }
    }
    onMouseUp(coord,event){
        if (this.clickNum === 0) {
            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++
            drawing = true
            $('#canvas-real').hide()
        }

        else if (this.clickNum === 1) {
            this.contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);

            contextReal.drawImage(
                //Element to draw to realCanvas
                canvasDraft, 
                // X-axis coordinate of the draftCanvas to draw from
                0,
                // Y-axis coordinate of the draftCanvas to draw from
                0,
                // Width of the draftCanvas to draw from
                canvasWidth, 
                // Height of the draftCanvas to draw from
                canvasHeight, 
                // X-axis coordinate of the realCanvas to draw to
                0, 
                // Y-axis coordinate of the realCanvas to draw to
                0, 
                // Width to draw the image on the realCanvas
                canvasWidth,
                // Height to draw the image on the realCanvas
                canvasHeight
            )
            
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.width);
            this.clickNum = 0
            $('#canvas-real').show()
            cPush()
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}
}