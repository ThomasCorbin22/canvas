$('#drawing-fill-bucket').click(()=>{
    currentFunction = new DrawingFillBucket(contextReal,contextDraft);
});

class DrawingFillBucket extends PaintFunction{
    constructor(contextReal,contextDraft){
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