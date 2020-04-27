function sepia(data, index) {
    let originalRed = data[index]
    let originalGreen = data[index + 1]
    let originalBlue = data[index + 2]

    let sepiaRed = Math.round(.393 * originalRed + .769 * originalGreen + .189 * originalBlue)
    let sepiaGreen = Math.round(.349 * originalRed + .686 * originalGreen + .168 * originalBlue);
    let sepiaBlue = Math.round(.272 * originalRed + .534 * originalGreen + .131 * originalBlue);

    // Allows control of how much sepia is added
    let redDiff = data[index] - sepiaRed
    let greenDiff = data[index + 1] - sepiaGreen
    let blueDiff = data[index + 2] - sepiaBlue

    sepiaRed = data[index] - redDiff * sepiaAmt
    sepiaGreen = data[index + 1] - greenDiff * sepiaAmt
    sepiaBlue = data[index + 2] - blueDiff * sepiaAmt

    // Check to see if any values exceed limits
    if (sepiaRed > 255) {
        data[index] = 255
    }
    else {
        data[index] = sepiaRed
    }
    if (sepiaGreen > 255) {
        data[index + 1] = 255
    }
    else {
        data[index + 1] = sepiaGreen
    }
    if (sepiaBlue > 255) {
        data[index + 2] = 255
    }
    else {
        data[index + 2] = sepiaBlue
    }
}