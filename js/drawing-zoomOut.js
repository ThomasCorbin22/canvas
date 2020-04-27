function drawingZoomOut() {
    if (zoomIn === true) {
        canvasReal = document.getElementById('canvas-real');
        contextReal = canvasReal.getContext('2d');
        canvasDraft = document.getElementById('canvas-draft');
        contextDraft = canvasDraft.getContext('2d');

        windowWidth = windowWidth / 3;
        windowHeight = windowWidth / 3;

        contextReal.drawImage(canvasZoomReal, zoomX, zoomY, canvasWidth * 2, canvasHeight * 2, 0, 0, canvasWidth, canvasHeight)

        contextZoomReal.clearRect(0, 0, contextZoomReal.canvas.width, contextZoomReal.canvas.height);
        contextZoomDraft.clearRect(0, 0, contextZoomReal.canvas.width, contextZoomReal.canvas.height);

        $('#canvas-zoom-real').hide()
        $('#canvas-zoom-draft').hide()
        $('#canvas-real').show()
        $('#canvas-draft').show()

        zoomX = 0
        zoomY = 0

        zoomIn = false
        cPush()
    }
}