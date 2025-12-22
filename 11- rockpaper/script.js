const playerOneScore = document.querySelector(".player-one-score");
const playerTwoScore = document.querySelector(".player-two-score");
const playerOneChoiceImg = document.querySelector(".player-one-choice");
const playerTwoChoiceImg = document.querySelector(".player-two-choice");
const round_number = document.querySelector(".round_number")
const button_start = document.querySelector("#start")
//clicable items:
const gun_item = document.querySelector(".box.eigth img");
const paper_item = document.querySelector(".box.two img");
const rock_item = document.querySelector(".box.seven img");
const scissor_item = document.querySelector(".box.nine img");
const item_list = [gun_item,paper_item,rock_item,scissor_item];
//start the images hidden
playerOneChoiceImg.style.visibility = "hidden";
playerTwoChoiceImg.style.visibility = "hidden";
gun_item.style.visibility = "hidden";
let gameRunning = false;
let playerOneScore_score = 0;
let playerTwoScore_score = 0;

//item locations for images
const item_location_dictionary ={
    rock:"./imgs/item_rock.png",
    paper:"./imgs/item_paper.png",
    scissor:"./imgs/item_scissor.png",
    gun:"./imgs/item_gun.png",
}

//values for items
const item_choice_dictionery = {
    "gun":4,
    "paper":1,
    "rock":2,
    "scissor":3
};



button_start.addEventListener("click",() => {
    gameRunning = true;
    round_number.textContent = "Choose your weapon"
    game_loop();
})

for (item of item_list){
    let currentItem = item;
    item.addEventListener("click",() => {
        if (gameRunning ===false){
            return ;
        }
        else{
            const cpuMove = npc_draw();
            const playerMove = currentItem.alt;
            playerOneChoiceImg.style.visibility = "visible";
            playerOneChoiceImg.src = item_location_dictionary[playerMove]
            const outcome = decide_winner(cpuMove, playerMove);
        }
    });
} 


function npc_draw(){
    let randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
    if(randomNumber===0){
        playerTwoChoiceImg.style.visibility="visible";
        playerTwoChoiceImg.src=item_location_dictionary.paper;
        return "paper";
    }else if(randomNumber===1){

        playerTwoChoiceImg.style.visibility="visible";
        playerTwoChoiceImg.src=item_location_dictionary.rock;
        return "rock";
    }else{
        playerTwoChoiceImg.style.visibility="visible";
        playerTwoChoiceImg.src=item_location_dictionary.scissor;
        return "scissor"
    }
};

function game_loop(){
    playerOneChoiceImg.style.visibility = "hidden";
    playerTwoChoiceImg.style.visibility = "hidden";
    //creates the clicks on the buttons

    if(playerOneScore_score< 5 && playerTwoScore_score<5){

    }
    else{
        if(playerOneScore_score===5){

            playerOneScore_score = 0;
            playerTwoScore_score = 0;
            playerOneScore.textContent = playerOneScore_score;
            playerTwoScore.textContent = playerTwoScore_score;
            round_number.textContent = "You win";
            gameRunning = false;
        }
        else{

            playerOneScore_score = 0;
            playerTwoScore_score = 0;
            playerOneScore.textContent = playerOneScore_score;
            playerTwoScore.textContent = playerTwoScore_score;
            gameRunning = false;
            round_number.textContent = "CPU Wins"
        }
    }

}

function decide_winner(cpuMove, playerMove){
    console.log(cpuMove,playerMove);
    if(cpuMove === playerMove) {round_number.textContent = "draw"}
    else if((playerMove === 'rock'     && cpuMove === 'scissor') ||
    (playerMove === 'paper'    && cpuMove === 'rock') ||
    (playerMove === 'scissor' && cpuMove === 'paper')){
        playerOneScore_score++;
        playerOneScore.textContent = playerOneScore_score;
        round_number.textContent = "round won"
    }
    else{
        playerTwoScore_score++;
        playerTwoScore.textContent = playerTwoScore_score;
        round_number.textContent = "round lost"
    }
    //Call it again
    setTimeout(game_loop, 2000);


}