function towerBuilder(nFloors) {
    // build here
    const finalArray = []
    let countOfSymbolsInString = 1
    let intermediateValueOfStars = 1

    for (let i = 2; i <= nFloors; i++) {
        countOfSymbolsInString += 2
    }

    for (let i = 1; i <= nFloors; i++) {
        let str = ''

        for (let n = 1; n <= countOfSymbolsInString; n++) {
            if (n <= ((countOfSymbolsInString - intermediateValueOfStars) / 2) || n > (((countOfSymbolsInString - intermediateValueOfStars) / 2)) + intermediateValueOfStars) {
                str += ' '
            } else {
                str += '*'
            }
        }
        intermediateValueOfStars += 2
        finalArray.push(str)
    }
    return finalArray
}


console.log(towerBuilder(5))