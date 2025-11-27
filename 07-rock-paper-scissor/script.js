console.log("Hi world");
let randomNumber = Math.floor(Math.random()*100);
const all_p = document.querySelectorAll("p");
let player = "";
/**
 *
 *
 * @param {Number} randomNumber
 */
function npc_draw(randomNumber){
    if(randomNumber<33){
        all_p[0].textContent = "Rock";
    }else if(randomNumber >=33 && randomNumber <66 ){
        all_p[0].textContent = "Paper";
    }else{
        all_p[0].textContent = "Scissor"
    }
    return NaN
}

while(player!=="rock"  && player!== "paper" && player!== "scissor"){
    player = prompt("rock, paper, scissor").toLowerCase();
    if (!["rock", "paper", "scissor"].includes(player) ){
        console.log(`you picked ${player}`)
    }
    //create a settimeout to call the fucntion again and wait 1000 seconds
}


npc_draw(randomNumber)
console.log(randomNumber, all_p) 