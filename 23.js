/*
You are given a message (text) that you choose to read in a mirror (weirdo). 
Return what you would see, complete with the mirror frame. 
Words in your solution should be left-aligned.
*/

//solution:
function mirror(text) {
	text = text.split(' ');
	let rowOfStars = '****';
	let maxWordLength = 0;
	let finalText = '';

	//переворот слов в обратном порядке + нахождение длины самого длинного слова:
	for (let i = 0; i < text.length; i++) {
		text[i] = text[i].split('').reverse().join('');
		if (text[i].length > maxWordLength) {
			maxWordLength = text[i].length;
		}
	};

	//добавление пробелов словам, длина которых менее maxWordLength + формирование
	//финального текста для вывода на экран:
	function dofinalText() {
		for (let i = 0; i < text.length; i++) {
			if (text[i].length < maxWordLength) {
				let amountOfIteration = maxWordLength - text[i].length;
				for (let y = 0; y < amountOfIteration; y++) {
					text[i] += ' ';
				}
			}
			finalText += `\n* ${text[i]} *`;
		};
	};
	dofinalText();

	//формирование ряда со звёздочками 
	for (i = 1; i <= maxWordLength; i++) {
		rowOfStars += '*';
	};

	return rowOfStars + finalText + '\n' + rowOfStars;
};

