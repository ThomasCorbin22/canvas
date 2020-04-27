$('#drawing-clear').click(()=>{
    contextReal.clearRect(0, 0, contextReal.canvas.width, contextReal.canvas.height);
    contextDraft.clearRect(0, 0, contextDraft.canvas.width, contextDraft.canvas.height);
    cPush()
});