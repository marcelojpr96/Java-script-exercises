let arr = [1,2,3,4,5]
//map, reduce, filter
function sumOfTripledEvens(arr){
    return arr.filter((num) => num%2==0).map((num)=> num*3).reduce((total, num) => total +=num);
}
let digit = sumOfTripledEvens(arr)
console.log(digit)