function filterRangeInPlace(arr, num1, num2) {
    let i = 0;
    while (i < arr.length) {
        if ((n => n >= num1 && n <=num2)(arr[i])) {
            i++;
        } else {
            arr.splice(0, 1);
            if (arr.length === 0) break;
        }
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1,4);
console.log(arr); // [3]
