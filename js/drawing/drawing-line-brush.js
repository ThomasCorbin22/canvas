class DrawingBrushLine extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        
        this.contextDraft.strokeStyle = curStroke;
        this.contextDraft.lineJoin = curJoin;
        this.contextDraft.lineWidth = curWidth;
        this.contextDraft.shadowBlur = 10;
        this.contextDraft.shadowColor = curStroke;
        drawing = true

        this.contextDraft.beginPath();
        this.contextDraft.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1], this.contextDraft);
    }
    onDragging(coord,event){
        if (drawing === true){
            this.draw(coord[0],coord[1], this.contextDraft);
        }
        else {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        }
    }

    onMouseMove(){}
    onMouseUp(coord,event){
        let canvasPic = new Image();
        canvasPic.src = canvasDraft.toDataURL()
        canvasPic.onload = function () { 
            contextReal.drawImage(canvasPic, 0, 0); 
            contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            cPush()
        }
        this.contextDraft.shadowBlur = 0;
        this.contextDraft.shadowColor = '';
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y, context){
        context.lineTo(x,y);
        context.moveTo(x,y);
        context.closePath();
        context.stroke();    
    }
}