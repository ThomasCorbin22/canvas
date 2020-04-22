$('#drawing-fill-bucket').click(()=>{
    currentFunction = new DrawingFillBucket(contextReal,contextDraft);
});

class DrawingFillBucket extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(){}

    onDragging(){}
    onMouseMove(){}

    onMouseUp(coord, event){
        // paintBucketFill(coord)
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

// function paintBucketFill(coord){

//     colorLayer = this.contextReal.getImageData(0, 0, canvasWidth, canvasHeight);
//     console.log('PaintBucket: ' + Colour Layer)

//     pixelStack = [coord];

//     while(pixelStack.length)
//     {
//       var newPos, x, y, pixelPos, reachLeft, reachRight;
//       newPos = pixelStack.pop();
//       x = newPos[0];
//       y = newPos[1];
      
//       // Get current pixel position
//       pixelPos = (y * canvasWidth + x) * 4;

//       // Go up the page as long as the colour matches
//       while(y >= 0 && matchStartColor(pixelPos, imgData))
//       {
//         pixelPos -= canvasWidth * 4;
//       }
//       pixelPos += canvasWidth * 4;
//       y++;
//       reachLeft = false;
//       reachRight = false;

//       // Go down the page as long as the colour matches and is in the canvas
//       while(y < canvasHeight && matchStartColor(pixelPos, imgData))
//       {
//         colorPixel(pixelPos, imgData);
    
//         if(x > 0)
//         {
//           if(matchStartColor(pixelPos - 4), imgData)
//           {
//             if(!reachLeft){
//               pixelStack.push([x - 1, y]);
//               reachLeft = true;
//             }
//           }
//           else if(reachLeft)
//           {
//             reachLeft = false;
//           }
//         }
        
//         if(x < canvasWidth-1)
//         {
//           if(matchStartColor(pixelPos + 4, imgData))
//           {
//             if(!reachRight)
//             {
//               pixelStack.push([x + 1, y]);
//               reachRight = true;
//             }
//           }
//           else if(reachRight)
//           {
//             reachRight = false;
//           }
//         }
                
//         pixelPos += canvasWidth * 4;
//       }
//     }
//     context.putImageData(colorLayer, 0, 0);
// }

  
// function matchStartColor(pixelPos, colorLayer)
// {
//   var r = colorLayer.data[pixelPos];	
//   var g = colorLayer.data[pixelPos + 1];	
//   var b = colorLayer.data[pixelPos + 2];

//   return (r == startR && g == startG && b == startB);
// }

// function colorPixel(pixelPos, colorLayer)
// {
//   colorLayer.data[pixelPos] = 50;
//   colorLayer.data[pixelPos+1] = 50;
//   colorLayer.data[pixelPos+2] = 50;
//   colorLayer.data[pixelPos+3] = 255;
// }

// floodFill = function (startX, startY, startR, startG, startB) {

//   // Draw the current state of the color layer to the canvas
//   contextReal.putImageData(colorLayerData, 0, 0);

//   var newPos,
//     x,
//     y,
//     pixelPos,
//     reachLeft,
//     reachRight,
//     drawingBoundLeft = 0,
//     drawingBoundTop = 0,
//     drawingBoundRight = canvasWidth - 1,
//     drawingBoundBottom = canvasHeight - 1,
//     pixelStack = [[startX, startY]];

//   while (pixelStack.length) {

//     newPos = pixelStack.pop();
//     x = newPos[0];
//     y = newPos[1];

//     // Get current pixel position
//     pixelPos = (y * canvasWidth + x) * 4;

//     // Go up as long as the color matches and are inside the canvas
//     while (y >= drawingBoundTop && matchStartColor(pixelPos, startR, startG, startB)) {
//       y -= 1;
//       pixelPos -= canvasWidth * 4;
//     }

//     pixelPos += canvasWidth * 4;
//     y += 1;
//     reachLeft = false;
//     reachRight = false;

//     // Go down as long as the color matches and in inside the canvas
//     while (y <= drawingBoundBottom && matchStartColor(pixelPos, startR, startG, startB)) {
//       y += 1;

//       colorPixel(pixelPos, curFill.r, curFill.g, curFill.b);

//       if (x > drawingBoundLeft) {
//         if (matchStartColor(pixelPos - 4, startR, startG, startB)) {
//           if (!reachLeft) {
//             // Add pixel to stack
//             pixelStack.push([x - 1, y]);
//             reachLeft = true;
//           }
//         } else if (reachLeft) {
//           reachLeft = false;
//         }
//       }

//       if (x < drawingBoundRight) {
//         if (matchStartColor(pixelPos + 4, startR, startG, startB)) {
//           if (!reachRight) {
//             // Add pixel to stack
//             pixelStack.push([x + 1, y]);
//             reachRight = true;
//           }
//         } else if (reachRight) {
//           reachRight = false;
//         }
//       }

//       pixelPos += canvasWidth * 4;
//     }
//   }
// }

// matchOutlineColor = function (r, g, b, a) {

//   return (r + g + b < 100 && a === 255);
// },

// matchStartColor = function (pixelPos, startR, startG, startB) {

//   var r = outlineLayerData.data[pixelPos],
//     g = outlineLayerData.data[pixelPos + 1],
//     b = outlineLayerData.data[pixelPos + 2],
//     a = outlineLayerData.data[pixelPos + 3];

//   // If current pixel of the outline image is black
//   if (matchOutlineColor(r, g, b, a)) {
//     return false;
//   }

//   r = colorLayerData.data[pixelPos];
//   g = colorLayerData.data[pixelPos + 1];
//   b = colorLayerData.data[pixelPos + 2];

//   // If the current pixel matches the clicked color
//   if (r === startR && g === startG && b === startB) {
//     return true;
//   }

//   // If current pixel matches the new color
//   if (r === curFill.r && g === curFill.g && b === curFill.b) {
//     return false;
//   }

//   return true;
// },

// colorPixel = function (pixelPos, r, g, b, a) {

//   colorLayerData.data[pixelPos] = r;
//   colorLayerData.data[pixelPos + 1] = g;
//   colorLayerData.data[pixelPos + 2] = b;
//   colorLayerData.data[pixelPos + 3] = a !== undefined ? a : 255;
// }

// // Start painting with paint bucket tool starting from pixel specified by startX and startY
// paintAt = function (startX, startY) {

//   var pixelPos = (startY * canvasWidth + startX) * 4,
//     r = colorLayerData.data[pixelPos],
//     g = colorLayerData.data[pixelPos + 1],
//     b = colorLayerData.data[pixelPos + 2],
//     a = colorLayerData.data[pixelPos + 3];

//   if (r === curFill.r && g === curFill.g && b === curFill.b) {
//     // Return because trying to fill with the same color
//     return;
//   }

//   if (matchOutlineColor(r, g, b, a)) {
//     // Return because clicked outline
//     return;
//   }

//   floodFill(startX, startY, r, g, b);

//   // redraw();
// }