// Write a function which counts the number of vowels in a given string. Return the count number.

// Passing the string "Hello world!" as an argument to your vowelCount() function would result in the number 3 being returned.



function vowelCount(str) {
    let stringVar = str.toLowerCase().split('')

    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    stringVar.forEach(e => {
        vowels.forEach(a => {
            if (a.includes(e)) {
                count++;
            }
        })
    })
    return count
}

console.log(vowelCount('-bcd-fgh-jklmn-pqrst-vwxyz')); // <--- 0
console.log(vowelCount('Hello world!')); // <--- 3
console.log(vowelCount('Pinto beans')); // <--- 4
console.log(vowelCount('The quick brown fox jumped over the lazy dog.')); // <--- 12
console.log(vowelCount('Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.')); // <--- 58
console.log(vowelCount('All I have ever wanted is to be an Uber driver!')); // <--- 16