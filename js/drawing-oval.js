$('#drawing-oval').click(() => {
    currentFunction = new DrawingOval(contextReal, contextDraft);
});

class DrawingOval extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
    }
    onMouseDown() { }

    onDragging() { }

    onMouseMove(coord, event) {

        this.contextDraft.strokeStyle = curStroke;
        this.contextDraft.fillStyle = curFill;
        this.contextDraft.lineWidth = curWidth;

        if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.DrawOval(coord[0], coord[1], this.contextDraft);
        }
    }
    onMouseUp(coord, event) {
        this.contextReal.strokeStyle = curStroke;
        this.contextReal.fillStyle = curFill;
        this.contextReal.lineWidth = curWidth;

        if (this.clickNum === 0) {
            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++
        }
        else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.DrawOval(coord[0], coord[1], this.contextReal);
            this.clickNum = 0
        }
    }
    onMouseLeave() { }
    onMouseEnter() { }


    drawOval(x, y, context) {
        context.beginPath();
        var scaleX = diffX / 2;
        var scaleY = diffY / 2;
        context.scale(scaleX, scaleY);

        var centerX = (x / scalex) + 1;
        var centerY = (y / scaley) + 1;

        context.arc(centerX, centerY, 1, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

    }

    radius(x, y) {
        let diffX = this.origX - x;
        let diffY = this.origY - y;
        let radiusSquare = Math.pow(diffX, 2) + Math.pow(diffY, 2)
        let radius = Math.pow(radiusSquare, 0.5)
        return radius
    }
}

// //Canvas
// var canvas = document.getElementById('canvas');//
// var ctx = canvas.getContext('2d');//
// //Variables
// var canvasx = $(canvas).offset().left;//
// var canvasy = $(canvas).offset().top;//
// var last_mousex = last_mousey = 0;
// var mousex = mousey = 0;
// var mousedown = false;

// //Mousedown
// $(canvas).on('mousedown', function(e) {
//     last_mousex = parseInt(e.clientX-canvasx);
// 	last_mousey = parseInt(e.clientY-canvasy);
//     mousedown = true;
// });

// //Mouseup
// $(canvas).on('mouseup', function(e) {
//     mousedown = false;
// });

// //Mousemove
// $(canvas).on('mousemove', function(e) {
//     mousex = parseInt(e.clientX-canvasx);
// 	mousey = parseInt(e.clientY-canvasy);
//     if(mousedown) {
//         ctx.clearRect(0,0,canvas.width,canvas.height); //clear canvas
//         //Save
//         ctx.save();
//         ctx.beginPath();
//         //Dynamic scaling
//         var scalex =(mousex-last_mousex)/2;
//         var scaley = (mousey-last_mousey)/2;
//         ctx.scale(scalex,scaley);
//         //Create ellipse
//         var centerx = (last_mousex/scalex)+1;
//         var centery = (last_mousey/scaley)+1;
//         ctx.arc(centerx, centery, 1, 0, 2*Math.PI);
//         //Restore and draw
//         ctx.restore();
//         ctx.strokeStyle = 'black';
//         ctx.lineWidth = 5;
//         ctx.stroke();
//     }
//     //Output
//     $('#output').html('current: '+mousex+', '+mousey+'<br/>last: '+last_mousex+', '+last_mousey+'<br/>mousedown: '+mousedown);
// });