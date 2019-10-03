// Good Morning! Write a function that takes an array of strings and return the longest string in the array.
// Edge case: If you had an array which had two "longest" strings of equal length, your function should just return the first one

function longestString(arr) {
    var sorted = arr.sort((a, b) => {
        return b.length - a.length
    })
    return sorted[0]
}

const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'

// Tested inside of repl>it and it works!