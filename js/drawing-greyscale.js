function greyScale(data, index) {
    let grey = 0

    //Get pixel average
    grey += data[index] * 0.2126
    grey += data[index + 1] * 0.7152
    grey += data[index + 2] * 0.0722
    grey = Math.round(grey / 3)

    // Allows control of how much greyscale is added
    let redDiff = data[index] - grey
    let greenDiff = data[index + 1] - grey
    let blueDiff = data[index + 2] - grey

    data[index] -= redDiff * greyAmt
    data[index + 1] -= greenDiff * greyAmt
    data[index + 2] -= blueDiff * greyAmt
}