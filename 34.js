function vowelOne(s) {
    const sArr = s.toLowerCase().split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let totalValue = '';
    for (let i = 0; i < sArr.length; i++) {
        let value = 0;
        for (let y = 0; y < vowels.length; y++) {
            if (sArr[i] === vowels[y]) {
                value = 1;
                break
            }
        }
        totalValue += value;
    }
    return totalValue
}