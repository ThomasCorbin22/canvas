class DrawingBrightness extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(coord,event){
        applyFilter(brightness)
        cPush()
    }
    onMouseLeave(){}
    onMouseEnter(){}
}