class DrawingSepia extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(coord,event){
        applyFilter(sepia)
        cPush()
    }
    onMouseLeave(){}
    onMouseEnter(){}
}