function stringy(size) {
    // your code here
    let finalValue = ''
    for (let i = 1; i <= size; i++) {
        if (i % 2 === 0) {
            finalValue += '0'
        } else {
            finalValue += '1'
        }
    }
    return finalValue
}