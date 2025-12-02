let arr = [5, 3, 8, 1];

function filterRange(arr, num1, num2){
    return arr.filter(number => number >= num1 && number <=num2)
}

let filtered = filterRange(arr, 3 ,5)

console.log(filtered)
console.log(filterRange(arr, 3 ,5))