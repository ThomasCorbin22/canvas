$('#drawing-polyline').click(()=>{
    currentFunction = new DrawingPolyline(contextReal,contextDraft);
});

class DrawingPolyline extends PaintFunction{
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
        this.contextDraft.fillStyle = curFill;
        this.contextDraft.lineJoin = curJoin;
        this.contextDraft.lineWidth = curWidth;

        if (this.clickNum != 0 && drawing === false){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(this.XY, '', '', this.contextReal, 'open');

            this.XY = []
            this.clickNum = 0
        }
        else if (this.clickNum != 0){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(this.XY, coord[0], coord[1] , this.contextDraft, 'open');
        }
    }

    onMouseUp(coord,event){
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.fillStyle = curFill;
        this.contextReal.lineJoin = curJoin;
        this.contextReal.lineWidth = curWidth;

        if (this.clickNum === 0) {
            this.XY = [ [coord[0], coord[1]] ];
            drawing = true
            this.clickNum++
        }
        else if (this.clickNum != 0 && this.closed(this.XY, coord[0], coord[1]) && drawing === true){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(this.XY, coord[0], coord[1], this.contextReal, 'closed');

            this.XY = []
            this.clickNum = 0
            drawing = false
        }
        else if (this.clickNum != 0 && drawing === true) {
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.draw(this.XY, coord[0], coord[1], this.contextDraft, 'open');

            this.XY.push([coord[0], coord[1]])
            this.clickNum++
        }
    }

    onMouseLeave(){}
    onMouseEnter(){}

    draw(XY, x, y, context, closed){
        context.beginPath();
        context.moveTo(XY[0][0],XY[0][1]);
        for (let i = 1; i < XY.length; i++){
            context.lineTo(XY[i][0],XY[i][1]);
        }
        if (closed === 'closed'){
            context.closePath();
        }
        else if ( x !== '' || y != '') {
            context.lineTo(x,y);
        }
        // context.fill();
        context.stroke();
    }

    closed(XY, x, y){
        let coordMatch = 0
        for (let i = -10; i < 10; i++){
            if (x + i === XY[0][0]){
                coordMatch++
            }
            if (y + i === XY[0][1]){
                coordMatch++
            }
        }
        if (coordMatch === 2){
            return true
        }
        return false
    }
}