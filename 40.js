function XO(str) {
    //code here
    let x = 0
    let o = 0

    str.toLowerCase().split('').forEach(w => {
        if (w === 'o') {
            o++
        } else if (w === 'x') {
            x++
        }
    })

    return x === o
}