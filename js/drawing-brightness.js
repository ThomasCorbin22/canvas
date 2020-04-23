$('#drawing-brightness').click(()=>{
    applyFilter(brightness)
    cPush()
});

function brightness(data, index) {
    let brightRed = data[index] + brightAmt
    let brightGreen = data[index + 1] + brightAmt
    let brightBlue = data[index + 2] + brightAmt

    if (brightRed > 255) {
        data[index] = 255
    }
    else if (brightRed < 0) {
        data[index] = 0
    }
    else {
        data[index] = brightRed
    }
    if (brightGreen > 255) {
        data[index + 1] = 255
    }
    else if (brightGreen < 0) {
        data[index + 1] = 0
    }
    else {
        data[index + 1] = brightGreen
    }
    if (brightBlue > 255) {
        data[index + 2] = 255
    }
    else if (brightBlue < 0) {
        data[index + 2] = 0
    }
    else {
        data[index + 2] = brightBlue
    }
}