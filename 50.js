function alphabetPosition(text) {
    const alphArr = [, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return text.toLowerCase().split('').filter(el => alphArr.includes(el)).map(el => {
        return alphArr.findIndex(letter => letter === el)
    }).join(' ')
}
