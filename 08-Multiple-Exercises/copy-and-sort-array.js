function copySorted(arr){
    return arr.slice().sort()
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
console.log(arr, sorted)