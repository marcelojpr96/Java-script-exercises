function unique(arr) {
  return [...new Set(arr)]
}
//or

function unique2(arr){
    let uniq = [];
    for(let str of arr){
        if(!uniq.includes(str)){
            uniq.push(str);
        }
    }
    return uniq;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique2(strings) ); // Hare, Krishna, :-O
console.log(unique(strings) ); // Hare, Krishna, :-O