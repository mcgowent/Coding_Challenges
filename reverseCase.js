// Good morning! Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

function reverseCase(string) {
    let temp = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            temp[i] = string[i].toLowerCase()
        } else {
            temp[i] = string[i].toUpperCase()
        }
    }

    return temp.join('')
}

const string = 'HELLO world!';
console.log(reverseCase(string)); // <--- hello WORLD!