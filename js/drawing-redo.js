$('#drawing-redo').click(()=>{
    cRedo();
});

function cRedo() {
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        contextReal.clearRect(0, 0, contextReal.canvas.width, contextReal.canvas.height);
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
    }
}