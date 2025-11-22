let test = "testing css and javascript";
console.log(test);
const this_wont_change = test;
console.log(this_wont_change);
test = "oops it changed"
console.log(this_wont_change, test);

const button = document.querySelector("button");
function greet(){
    const name = prompt("what is your name?");
    const greeting = document.querySelector("#hellomate");
    greeting.textContent = `hello ${name}, greetings`;
    
}
button.addEventListener("click", greet);
let firstname = "roger";
function reversename(firstname){
    return firstname.split('').reverse().join('');
}
let reversed_name = reversename(firstname);
console.log("This is you name", firstname, reversed_name);
