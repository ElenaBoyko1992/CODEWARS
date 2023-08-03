function repeatStr(n, s) {
    return (n === 1) ? s : s + repeatStr(n - 1, s)
}


console.log(repeatStr(3, "*"))