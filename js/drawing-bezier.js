$('#drawing-bezier').click(()=>{
    currentFunction = new DrawingBezier(contextReal,contextDraft);
});

class DrawingBezier extends PaintFunction{
    constructor(contextReal, contextDraft){
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

        if (this.clickNum > 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.clickNum = 0
        }
        else if (this.clickNum === 1){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawStraight(coord[0],coord[1], this.contextDraft);
        }
        else if (this.clickNum === 2){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier( this.midX, this.midY, coord[0], coord[1], this.contextDraft);

            this.drawDotted(this.origX, this.origY, this.midX, this.midY, this.contextDraft)
            this.drawDotted(this.finalX, this.finalY, coord[0], coord[1], this.contextDraft)
            this.drawRect(this.midX, this.midY, this.contextDraft)
            this.drawRect(coord[0], coord[1], this.contextDraft)
        }
        else if (this.clickNum === 3){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier(coord[0], coord[1], this.CPX1, this.CPY1, this.contextDraft);

            this.drawDotted(this.origX, this.origY, coord[0], coord[1], this.contextDraft)
            this.drawDotted(this.finalX, this.finalY, this.CPX1, this.CPY1, this.contextDraft)
            this.drawRect(this.CPX1, this.CPY1, this.contextDraft)
            this.drawRect(coord[0], coord[1], this.contextDraft)
        }
    }

    onMouseUp(coord,event){
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.lineJoin = curJoin;
        this.contextReal.lineWidth = curWidth;
        
        if (this.clickNum === 0) {
            this.origX = coord[0];
            this.origY = coord[1];

            this.clickNum++
            drawing = true
        }
        else if (this.clickNum === 1) {
            this.finalX = coord[0];
            this.finalY = coord[1];

            let [midX, midY] = this.midPoint(this.origX, this.origY, this.finalX, this.finalY)
            this.midX = midX;
            this.midY = midY;

            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier(this.midX, this.midY, coord[0], coord[1], this.contextDraft);
            this.clickNum++
        }
        else if (this.clickNum === 2) {
            this.CPX1 = coord[0];
            this.CPY1 = coord[1];

            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier(coord[0], coord[1], this.CPX1, this.CPY1, this.contextDraft);
            this.clickNum++
        }
        else if (this.clickNum === 3){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawBezier(coord[0], coord[1], this.CPX1, this.CPY1, this.contextReal);
            this.clickNum = 0
            cPush()
        }
    }

    onMouseLeave(){}
    onMouseEnter(){}

    drawStraight(x,y, context){
        context.beginPath();
        context.moveTo(this.origX,this.origY);
        context.lineTo(x,y);
        context.stroke();    
    }

    drawBezier(cpx1, cpy1, cpx2, cpy2, context){
        context.beginPath();
        context.moveTo(this.origX,this.origY);
        context.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, this.finalX, this.finalY)
        context.stroke();    
    }

    drawDotted(x, y, cpx,cpy, context){
        context.save()
        context.strokeStyle = "rgba(255, 0, 0, 1)"
        context.lineWidth = 2;
        context.setLineDash([3, 3]);
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(cpx,cpy);
        context.stroke();
        context.restore()
    }

    drawRect(cpx, cpy, context){
        context.save()
        context.fillStyle = "rgba(255, 0, 0, 1)"
        context.fillRect(cpx - 5, cpy - 5, 10, 10)
        context.restore()
    }

    midPoint(x1, y1, x2, y2){
        let midX = x1 - x2;
        let midY = y1 - y2

        midX = x1 - midX / 2 
        midY = y1 - midY / 2

        console.log('X1: ' + x1)
        console.log('Y1: ' + y1)
        console.log('midX: ' + midX)
        console.log('midY: ' + midY)
        console.log('X2: ' + x2)
        console.log('Y2: ' + y2)

        return [midX, midY]
    }
}