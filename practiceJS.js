// 1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
// Test Data :
console.log(is_array('w3resource')); //Should be false
console.log(is_array([1, 2, 4, 0])); //Should be true

function is_array(element) {
    return Array.isArray(element);
}

// 2. Write a JavaScript function to clone an array.Go to the editor
// Test Data:
console.log(array_Clone([1, 2, 4, 0])); //[1, 2, 4, 0]
console.log(array_Clone([1, 2, [4, 0]])); //[1, 2, [4, 0]]

function array_Clone(arr) {
    return arr.slice(0)
}

// 3. Write a JavaScript function to get the first element of an array.Passing a parameter 'n' will return the first 'n' elements of the array.Go to the editor
// Test Data:
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
// Expected Output:
//     7
//     []
//     [7, 9, 0]
//     [7, 9, 0, -2]
//     []

function first(arr, n = 1) {
    return arguments.length < 2 ? arr[0] : n < 0 ? [] : arr.slice(0, n)

    // if (arguments.length < 2) {
    //     return arr[0]
    // }
    // if (n < 0) {
    //     return [];
    // } else {
    //     return arr.slice(0, n)
    // }
}

// 4. Write a JavaScript function to get the last element of an array.Passing a parameter 'n' will return the last 'n' elements of the array.Go to the editor
// Test Data:
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
// Expected Output:
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function last(arr, n = -1) {
    return arguments.length < 2 ? arr.pop() : arr.slice(-n)
}