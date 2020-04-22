$('#drawing-circle').click(()=>{
    currentFunction = new DrawingCircle(contextReal,contextDraft);
});

class DrawingCircle extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    

    // let r = 50;  // radius
    // context.arc(200, 200, r, 0, Math.PI * 2);  // draw
    // context.fill();  // fill
    // context.stroke();//no fill



}