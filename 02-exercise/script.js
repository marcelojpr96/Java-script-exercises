let firstname = "marcelo";
let lastname ="rachado";

const thiswontchange = 500;
let math = 0.5;

console.log(firstname, lastname);
console.log(thiswontchange*math);
console.log("assigning something else to math, and then trying to assign something else to const");
math=5;
console.log(thiswontchange*math);
math ="something else";
console.log(`can i typechange a variable? ${math}`)
alert("hi");


//thiswontchange=5; //this will error out the codego