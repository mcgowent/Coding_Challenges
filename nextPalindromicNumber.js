//  Given a number, find the next smallest palindrome number larger than the number. If the number is 125. the next palindrome is 131.


function nextPalindrome(n) {
    let temp = true;
    let i = 1;
    let checker;

    while (temp) {
        if (Palindrome(n, i)) {
            checker = n + i;
            temp = false;
        } else {
            i++;
        }
    } return checker;
}

function Palindrome(n, i) {
    let value = n + i;
    let arr = value;
    let temp = false;
    arr = arr.toString().split('').reverse().join('');
    if (arr == value) {
        temp = true;
    }
    return temp;
}

nextPalindrome(131)