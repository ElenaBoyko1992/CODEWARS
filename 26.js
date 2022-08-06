/*
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:
Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A'
should become '@', Any other vowel should become '*'.
*/

function gordon(a){
    a = a.split(' ');
    let arrOfVowels = ['A', 'E', 'I', 'O', 'U'];

    for (let i=0; i<a.length; i++) {
        a[i] = a[i].toUpperCase() + '!!!!';
        a[i] = a[i].split('').map(function(item) {
            if(item === 'A') {
                item = '@'
            } else {
                for (let y = 0; y < arrOfVowels.length; y++) {
                    if (item == arrOfVowels[y]) {
                        item = '*';
                    }
                }
            }
            return item
        });
        a[i] = a[i].join('');
    }

    return a.join(' ');
};




