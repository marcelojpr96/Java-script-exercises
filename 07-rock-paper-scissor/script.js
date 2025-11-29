console.log("Hi world");
const all_p = document.querySelectorAll("p");
let player = "";
/**
 *
 *
 * @param {Number} randomNumber
 */
function npc_draw(){
    let randomNumber = Math.floor(Math.random()*100);
    if(randomNumber<33){
        all_p[0].textContent = "Rock";
        return "Rock";
    }else if(randomNumber >=33 && randomNumber <66 ){
        all_p[0].textContent = "Paper";
        return "Paper";
    }else{
        all_p[0].textContent = "Scissor"
        return "Scissor"
    }
}

function game_loop(){
    let answer = npc_draw();
    player="";
    setTimeout(()=>{
        console.log("------------------")
    },2000);
    while(player!=="rock"  && player!== "paper" && player!== "scissor"){
        player = prompt("rock, paper, scissor").toLowerCase();
        if (!["rock", "paper", "scissor"].includes(player) ){
            console.log(`you picked ${player}`)
        }
        //create a settimeout to call the fucntion again and wait 1000 seconds
    }
    switch(true) {
        case (answer ==="Rock" && player ==="paper"):
            console.log("You win");
            break;
        case (answer ==="Paper" && player ==="scissor"):
            console.log("You win");
            break;
        case (answer ==="Scissor" && player ==="rock"):
            console.log("You win");
            break;
        case (player ==="rock" && answer ==="Paper"):
            console.log("You Loose");
            break;
        case (player ==="paper" && answer ==="Scissor"):
            console.log("You Loose");
            break;
        case (player ==="scissor" && answer ==="Rock"):
            console.log("You Loose");
            break;
        default:
            console.log("Tie");
            break;
    }

    setTimeout(game_loop,1000);
}
setTimeout(game_loop,3000);