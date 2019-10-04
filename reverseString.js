// Good morning! Write a function called reverseString that accepts a string and returns a reversed copy of the string.

//Five ways to reverse a string

//Method #1
function reverseString(str) {
    //Using built in JS ways
    return str.split('').reverse().join('');
} console.log(reverseString('this is a string1'));

//Method #2
function reverseString2(str) {
    return [...str].reverse().join('');
} console.log(reverseString2('this is a string2'));

//Method #3
function reverseString3(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--)
        reversed = reversed + str[i];
    return reversed
} console.log(reverseString3('this is a string3'));

//Method #4
function reverseString4(str) {
    let reversed4 = '';
    for (let char of str) {
        reversed4 = char + reversed4;
    }
    return reversed4;
} console.log(reverseString4('this is a string4'));

//Method #5
function reverseString5(str) {
    return [...str].reduce((acc, char) => char + acc, '');
} console.log(reverseString5('this is a string5'));


