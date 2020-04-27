function blur(data, index, dataCopy) {
    let blurRed = 0;
    let blurGreen = 0;
    let blurBlue = 0;
    let ratio = 0

    for (let i = -blurAmt; i <= blurAmt; i++) {
        // Checks if width is off the page
        if (index + i * 4 >= 0 && index + i * 4 <= (canvasWidth * canvasHeight * 4) - 4){
            for (let j = -blurAmt; j <= blurAmt; j++) {
                // Checks if height is off the page
                if (index + j * 4 * canvasWidth >= 0 && index + j * 4 * canvasWidth <= (canvasWidth * canvasHeight * 4) - 4){
                    if (dataCopy[index + i * 4 + j * 4 * canvasWidth + 3]  === 0){
                        blurRed += 255
                        blurGreen += 255
                        blurBlue += 255
                    }
                    else{
                        blurRed += dataCopy[index + i * 4 + j * 4 * canvasWidth]
                        blurGreen += dataCopy[index + i * 4 + j * 4 * canvasWidth + 1]
                        blurBlue += dataCopy[index + i * 4 + j * 4 * canvasWidth + 2]
                    }
                    ratio++
                }
            }
        }
    }

    data[index] = Math.round(blurRed / ratio);
    data[index + 1] = Math.round(blurGreen / ratio);
    data[index + 2] = Math.round(blurBlue / ratio);
}