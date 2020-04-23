$('#drawing-text').click(()=>{
    currentFunction = new DrawingText(contextReal,contextDraft);
});

class DrawingText extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    
}
//simple code
    // {    
    //     ctx.font = "20pt Calibri,Geneva,Arial";
    //     ctx.strokeText("Sample string", 10, 20);
    //     ctx.strokeStyle = "rgb(0,0,0)";
    //     ctx.fillStyle = "rgb(0,20,180)";
    //     ctx.fillText("Another example", 10, 60);
    //   }  

    // strokeText(texte, x, y)
    // Displays the contour of the text. The color depends on the strokeStyle method.
    // fillText(texte, x, y)
    // Displays a plain text. The color depends on the fillstyle method.





//with functional text box
// var textBox = document.getElementById("textBox");
// var textFlag = false;
// var textContent = "";



// canvas.drawing = function (x1, y1, x2, y2, e) {
//     if (!context) {
//         return;
//     } else {
//         // set color and stroke style
//         context.fillStyle = "red";  // 填充颜色为红色
//         context.strokeStyle = "blue";  // 画笔的颜色
//         context.lineWidth = 5;  // 指定描边线的宽度

//         context.save();
//         context.beginPath();

//         // write word
//         context.font = "28px orbitron";
//         context.fillText(textContent, parseInt(textBox.style.left), parseInt(textBox.style.top));

//         context.restore();
//         context.closePath();
//     }
// };

// canvas.onmousedown = function mouseDownAction(e) {
//     this.X1 = e.offsetX;  // off set the onclick starting point
//     this.Y1 = e.offsetY;
//     if (textFlag) {
//         textContent = textBox.value;
//         textFlag = false;
//         textBox.style['z-index'] = 1;
//         textBox.value = "";
//         this.drawing(this.X1, this.Y1);
//     } else if (!textFlag) {
//         textFlag = true
//         textBox.style.left = this.X1 + 'px';
//         textBox.style.top = this.Y1 + 'px';
//         textBox.style['z-index'] = 6;
//     }
// };






