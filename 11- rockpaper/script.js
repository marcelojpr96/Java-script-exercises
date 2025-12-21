const playerOneScore = document.querySelector(".player-one-score");
const playerTwoScore = document.querySelector(".player-two-score");
const playerOneChoiceImg = document.querySelector(".player-one-choice");
const playerTwoChoiceImg = document.querySelector(".player-two-choice");
//start the images hidden
playerOneChoiceImg.style.visibility = "hidden";
playerTwoChoiceImg.style.visibility = "hidden";
const item_location_dictionary ={
    rock:"./imgs/item_rock.png",
    paper:"./imgs/item_paper.png",
    scissor:"./imgs/item_scissor.png",
    gun:"./imgs/item_gun.png",
}
const gun_item = document.querySelector(".box.eigth");
const paper_item = document.querySelector(".box.two");
const rock_item = document.querySelector(".box.seven");
const scissor_item = document.querySelector(".box.nine");
gun_item.style.visibility = "hidden";


gun_item.addEventListener("click",()=>{
    playerOneChoiceImg.style.visibility = "visible";
    playerOneChoiceImg.src=item_location_dictionary.gun;
    let randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
});
console.log(playerOneScore.textContent);