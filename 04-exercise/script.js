const button = document.querySelector("button");
const log_button = document.querySelector("button.log");
const random_number = Math.floor(Math.random() * 100);
const testing = document.getElementById("testing");
let guess_number = null;
console.log(random_number)
function my_function(){
    
    const number = prompt("Give me a number");
    const testing = document.getElementById("testing")
    if(Number(number)> Number(testing.textContent)){
        console.log("your number is higher");
    }
    else if(Number(number) == Number(testing.textContent)){
        testing.textContent = "its the same";
    }

    const main_div = document.querySelector("div");
    main_div.style.display = "flex";
    main_div.style.justifyContent = "center";
    main_div.style.alignItems="center";
    console.log("")
}

function my_function_test(){
    guess_number = +prompt("number?")
    if(guess_number > random_number){
        console.log(guess_number, typeof(guess_number), typeof(random_number));
        testing.textContent= "think smaller";

        console.log(random_number);
        setTimeout(my_function_test,1000);
        
    }
    else if(guess_number < random_number){
        console.log(guess_number);
        testing.textContent= "think bigger";

        console.log(random_number); 
        setTimeout(my_function_test,1000);
    }
    else if(guess_number === random_number){
        console.log(guess_number, "correct");
        testing.textContent ="correct";

        console.log(random_number);
    }
    


}
button.addEventListener("click",my_function);
log_button.addEventListener("click",my_function_test);