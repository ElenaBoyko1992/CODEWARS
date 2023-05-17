function mostLikely(prob1, prob2) {
    // your code
    let prob1Arr = prob1.split(':')
    let prob2Arr = prob2.split(':')

    return prob1Arr[0] / prob2Arr[1] > prob2Arr[0] / prob2Arr[1]
}

console.log(mostLikely('1:2', '1:3'))

