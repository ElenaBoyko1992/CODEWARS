function tailSwap(arr) {
    const newArr = arr.map(el => el.split(':'))
    return [`${newArr[0][0]}:${newArr[1][1]}`, `${newArr[1][0]}:${newArr[0][1]}`];
}
