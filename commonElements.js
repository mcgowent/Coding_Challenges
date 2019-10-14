// Good morning! Write a function called commonElements that has parameters for two arrays.  Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in. Need to add in extra ways to do this.

function commonElements(arr1, arr2) {
    let arr = []
    arr1.map(e => {
        let arr3 = arr2.map(f => {
            if (e === f) {
                arr.push(e)
            }
        })
    })
    return arr;
}

arr1 = [1, 2, 3, 4, 7, 8]
arr2 = [3, 4, 5, 6, 7, 8]


console.log(commonElements(arr1, arr2))