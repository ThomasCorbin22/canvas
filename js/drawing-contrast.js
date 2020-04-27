function contrast(data, index) {
    let contrastRed = Math.round((data[index] - 127.5) * constrastAmt + 127.5)
    let contrastGreen = Math.round((data[index + 1] - 127.5) * constrastAmt + 127.5)
    let contrastBlue = Math.round((data[index + 2] - 127.5) * constrastAmt + 127.5)

    if (contrastRed > 255) {
        data[index] = 255
    }
    else if (contrastRed < 0) {
        data[index] = 0
    }
    else {
        data[index] = contrastRed
    }
    if (contrastGreen > 255) {
        data[index + 1] = 255
    }
    else if (contrastGreen < 0) {
        data[index + 1] = 0
    }
    else {
        data[index + 1] = contrastGreen
    }
    if (contrastBlue > 255) {
        data[index + 2] = 255
    }
    else if (contrastBlue < 0) {
        data[index + 2] = 0
    }
    else {
        data[index + 2] = contrastBlue
    }
}