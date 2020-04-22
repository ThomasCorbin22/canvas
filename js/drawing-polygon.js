$('#drawing-polygon').click(()=>{
    currentFunction = new DrawingPolygon(contextReal,contextDraft);
});

class DrawingPolygon extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
    }
    
    onMouseDown(){}

    onDragging(){}

    onMouseMove(coord,event){
        this.contextDraft.strokeStyle = curStroke;
        this.contextDraft.lineJoin = curJoin;
        this.contextDraft.lineWidth = curWidth;
        this.contextDraft.fillStyle = curFill;

        if (this.clickNum != 0){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(coord[0],coord[1], numSides, this.contextDraft);
        }
    }

    onMouseUp(coord,event){
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.lineJoin = curJoin;
        this.contextReal.lineWidth = curWidth;
        this.contextReal.fillStyle = curFill;
        
        if (this.clickNum === 0) {
            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++
        }
        else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(coord[0],coord[1], numSides, this.contextReal);
            this.clickNum = 0
        }
    }

    onMouseLeave(){}
    onMouseEnter(){}

    draw(x, y, sides, context) {
        context.beginPath();
        context.moveTo(x, y);
        for (let i = 1; i < sides; i++) {
            let angle = i * 2 * Math.PI / sides
            let rotatedX = Math.cos(angle) * (x - this.origX) - Math.sin(angle) * (y - this.origY) + this.origX;
            let rotatedY = Math.sin(angle) * (x - this.origX) + Math.cos(angle) * (y - this.origY) + this.origY;
            context.lineTo(rotatedX,rotatedY);
        }
        context.closePath();
        context.fill();
        context.stroke();
    }
}
