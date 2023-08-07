function minDistance(n) {
    let arrayOfFactors = []
    let finalValue = n;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arrayOfFactors.push(i)
        }
    }

    for (let i=0; i<arrayOfFactors.length; i++) {
        if(arrayOfFactors[i+1]-arrayOfFactors[i]<finalValue){
            finalValue = arrayOfFactors[i+1]-arrayOfFactors[i]
        }
    }
    return finalValue
}

console.log(minDistance(13013))