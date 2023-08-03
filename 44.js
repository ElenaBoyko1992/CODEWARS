function duplicateEncode(word) {
    // ...
    const newArray = word.toLowerCase().split('').sort().filter((el, i, array) => el === array[i - 1])
    let finalString = ''
    word.toLowerCase().split('').map(el => (newArray.find(e => e === el) ? finalString += ')' : finalString += '(')).join()

    return finalString
}

console.log(duplicateEncode("Success"))