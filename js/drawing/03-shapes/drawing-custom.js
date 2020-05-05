class DrawingPolyline extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0         
    }
    
    onMouseDown(){}
    onDragging(){}

    onMouseMove(coord,event){
        this.contextDraft.strokeStyle = curStroke;
        this.contextDraft.fillStyle = curFill;
        this.contextDraft.lineJoin = curJoin;
        this.contextDraft.lineWidth = curWidth;
        this.contextDraft.setLineDash(linetype);

        if (this.clickNum != 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw('', '', this.contextReal, 'open');

            this.XY = []
            this.clickNum = 0
            cPush()
        }
        else if (this.clickNum != 0){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(coord[0], coord[1] , this.contextDraft, 'open');
        }
    }

    onMouseUp(coord,event){
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.fillStyle = curFill;
        this.contextReal.lineJoin = curJoin;
        this.contextReal.lineWidth = curWidth;
        this.contextReal.setLineDash(linetype);

        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            
            this.XY = [ [coord[0], coord[1]] ];
            this.clickNum++
            drawing = true
        }
        else if (this.clickNum != 0 && isClosed(coord[0], coord[1], this.XY[0][0], this.XY[0][1])){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(coord[0], coord[1], this.contextReal, 'closed');

            this.XY = []
            this.clickNum = 0
            drawing = false
            cPush()
        }
        else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(coord[0], coord[1], this.contextDraft, 'open');

            this.XY.push([coord[0], coord[1]])
            this.clickNum++
        }
    }

    onMouseLeave(){}
    onMouseEnter(){}

    draw(x, y, context, closed){
        context.beginPath();
        context.moveTo(this.XY[0][0],this.XY[0][1]);
        for (let i = 1; i < this.XY.length; i++){
            context.lineTo(this.XY[i][0],this.XY[i][1]);
        }
        if (closed === 'closed'){
            context.closePath();
        }
        else if ( x !== '' || y != '') {
            context.lineTo(x,y);
        }
        context.fill();
        context.stroke();
    }
}