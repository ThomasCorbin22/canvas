class DrawingSave extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;            
        this.contextDraft = contextDraft;
    }
    
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(coord,event){
        let downloadLink = document.createElement('a');
        downloadLink.setAttribute('download', 'CanvasAsImage.png');

        canvasReal.toBlob(function (blob) {
            let url = URL.createObjectURL(blob);
            downloadLink.setAttribute('href', url);
            downloadLink.click();
        });
    }
    onMouseLeave(){}
    onMouseEnter(){}
}