/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/


//solution:

function disemvowel(str) {

	let arrOfVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	str = Array.from(str);

	for (let y = 0; y < str.length; y++) {

		for (let i = 0; i < arrOfVowels.length; i++) {

			if (str[y] == arrOfVowels[i]) {

				str.splice(y, 1);
				y--;
			}
		}
	}

	return str.join('');
};

console.log(disemvowel('This website is for losers LOL!'));