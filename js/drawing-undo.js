function cUndo() {
    if (cStep > 0) {
        cStep--;
        let canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        contextReal.clearRect(0, 0, contextReal.canvas.width, contextReal.canvas.height);
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
    }
}