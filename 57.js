//return the total number of smiling faces in the array
function countSmileys(arr) {
    const smilingFace = [':)', ':D', ';)', ';D', ';-D', ':-D', ':~)', ';~)', ':~D', ';~D', ':-)', ';-)']
    return arr.filter(el => smilingFace.includes(el)).length
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']))