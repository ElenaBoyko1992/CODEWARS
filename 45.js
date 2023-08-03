function DNAStrand(dna) {
    return dna.toUpperCase().split('')
        .map(el => {
            switch (el) {
                case 'A':
                    return el = 'T'
                case 'T':
                    return el = 'A'
                case 'C':
                    return el = 'G'
                case 'G':
                    return el = 'C'
                default:
                    return el
            }

        }).join('')
}

console.log(DNAStrand("ATTGC"))