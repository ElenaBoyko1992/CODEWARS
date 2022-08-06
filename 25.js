/*
Write a function that can return the smallest value of an array or
the index of that value. The function's 2nd parameter will tell whether
it should return the value or the index.

Assume the first parameter will always be an array filled with at least
1 number and no duplicates. Assume the second parameter will be a string
holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

function min(arr, toReturn) {
    let secondArr = arr.slice().sort((a,b) => a-b);

    if (toReturn.toLowerCase() === 'value') {
        return secondArr[0];
    } else if (toReturn.toLowerCase() === 'index') {
       for (let i = 0; i < arr.length; i++ ) {
           if (arr[i] == secondArr[0]) {
               return i;
           }
       }
   }
};


