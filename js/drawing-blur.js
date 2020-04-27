class DrawingBlur extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;
        this.clickNum = 0          
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(coord,event){
        applyFilter(blur)
        cPush()
    }
    onMouseLeave(){}
    onMouseEnter(){}
}