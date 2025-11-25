const div = document.querySelector("div");
const button = document.querySelector("button");
const nr_of_kids = document.getElementById("nr_of_children");
/**
 * @description this is for clicking
 * @author Marcelo
 * @date 25/11/2025
 */
function click(){
    let nr_of_children = nr_of_kids.value;
    fizzbuzz(parseInt(nr_of_children));
    console.log("i clicked a button ", nr_of_children);
}

button.addEventListener("click", click)

/**
 * @description
 * @author Marcelo
 * @date 25/11/2025
 * @param {Number} nr_of_children
 */
function fizzbuzz(nr_of_children){

    for(i = 1 ; i <= nr_of_children; i++){
        console.log(i)
        if(i%3===0){
            if(i%5===0){
                div.textContent+="FizzBuzz ;"
            }
            div.textContent+="Fizz ;"
        } else if(i%5===0){
            div.textContent+="Buzz ;"
        }else{
            div.textContent+=`${i} ;`
        }
    }

}