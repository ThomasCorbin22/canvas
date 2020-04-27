$('#drawing-invert').click(()=>{
    applyFilter(invert)
    cPush()
});

function invert(data, index) {
    let brightRed = 255 - data[index]
    let brightGreen = 255 - data[index + 1]
    let brightBlue = 255 - data[index + 2]

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