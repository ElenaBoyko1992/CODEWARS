function between(a, b) {
    // your code here
    const finalArray = []
    for (let i = a; i <= b; i++) {
        finalArray.push(i)
    }
    return finalArray
}

console.log((between(1, 4)))