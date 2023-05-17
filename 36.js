function alternate(n, firstValue, secondValue) {
    let resultArr = []
    for (let i = 0; i <= n; i++) {
        resultArr.push(i % 2 === 0 ? firstValue : secondValue)
    }
    return resultArr
}

console.log(alternate(10, "blue", "red"))