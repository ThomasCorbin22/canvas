$('#drawing-undo').click(()=>{
    cUndo();
});

let cPushArray = new Array();
let cStep = -1;
	
function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(document.getElementById('canvas-real').toDataURL());
}

function cUndo() {
    if (cStep > 0) {
        cStep--;
        let canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        contextReal.clearRect(0, 0, contextReal.canvas.width, contextReal.canvas.height);
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
    }
}
