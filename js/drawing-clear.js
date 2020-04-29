class DrawingClear extends PaintFunction{
    constructor(contextReal, contextDraft, contextSelect){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;
        this.contextSelect = contextSelect;
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(coord,event){
        contextReal.clearRect(0, 0, contextReal.canvas.width, contextReal.canvas.height);
        contextDraft.clearRect(0, 0, contextDraft.canvas.width, contextDraft.canvas.height);
        contextSelect.clearRect(0, 0, contextSelect.canvas.width, contextSelect.canvas.height);
        cPush()
    }
    onMouseLeave(){}
    onMouseEnter(){}
}