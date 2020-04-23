$('#drawing-fill-colour').click(() => {
    currentFunction = new DrawingFillColour(contextReal, contextDraft);
});

class DrawingFillColour extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
              contextReal.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                               Math.floor(255 - 42.5 * j) + ', 0)';
              contextReal.fillRect(j * 25, i * 25, 25, 25);
            }
          }
        




    }



//    $('#cv').click(function(e) {
//        var data = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
       
//    /*     alert('rgb: ' + [].slice.call(data, 0, 3).join());
//         */    
//         alert(data) ;
//        ctx.fillStyle = "rgba(" + data + ")";
//        //ctx.fillStyle = rgba${data};
//            ctx.fillRect(30, 200, 150, 100);
//    });
   


    onMouseDown() { }

    onDragging() { }
    onMouseMove() { }


}



