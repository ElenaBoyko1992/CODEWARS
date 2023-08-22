function generateChatRoomNames(users) {
    const newArr = users.map(user => user.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)))
    const finalValue = []

    for (let i = 0; i < newArr.length; i++) {
        const filteredArr = newArr.filter((el) => el[0] === newArr[i][0])
        if (filteredArr.length > 1) {
            if (filteredArr.filter((value) => value[1][0] === newArr[i][1][0]).length > 1) {
                finalValue.push(newArr[i].join(' '))
                continue
            }
            finalValue.push(newArr[i][0] + ' ' + newArr[i][1][0])
            continue
        }
        finalValue.push(newArr[i][0])
    }
    return finalValue.sort()
}

console.log(generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"]))
