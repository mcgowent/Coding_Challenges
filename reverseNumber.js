function reverseNumber(num) {
    num = num + "";
    num = num.split("").reverse().join("");
    return Number(num);
}

console.log(reverseNumber(12345))
