/*Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.*/

function expandedForm(num) {
    let newVar = Array.from(String(num)).map(Number);
    let arrOfTotalValues = [];

    for (let i = newVar.length - 1; i >= 0; i--) {
        if (newVar[i] != 0) {
            let expandedNumber = newVar[i];

            if (i < newVar.length - 1) {
                for (y = 1; y <= newVar.length - 1 - i; y++) {
                    expandedNumber = String(expandedNumber) + 0;
                }
            }
            arrOfTotalValues.push(+expandedNumber);

        } else {
            continue;
        }
    }

    return arrOfTotalValues.reverse().join(' + ');
};

