function bingo(a) {
    // your winning code here
    const bingoNumbersArray = [2, 9, 14, 7, 15]

    for (let i = 0; i < bingoNumbersArray.length; i++) {
        if (!a.find((el) => el === bingoNumbersArray[i])) {
            return 'LOSE'
        }
    }
    return 'WIN'
}

