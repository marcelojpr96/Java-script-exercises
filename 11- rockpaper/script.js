const playerOneScore = document.querySelector(".player-one-score");
const playerTwoScore = document.querySelector(".player-two-score");
const playerOneChoiceImg = document.querySelector(".player-one-choice");
const playerTwoChoiceImg = document.querySelector(".player-two-choice");
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

//item locations for images
const item_location_dictionary ={
    rock:"./imgs/item_rock.png",
    paper:"./imgs/item_paper.png",
    scissor:"./imgs/item_scissor.png",
    gun:"./imgs/item_gun.png",
}

//values for items
const item_choice_dictionery = {
    gun_item:4,
    "paper":1,
    rock_item:2,
    scissor_item:3
};
//let randomNumber = Math.floor(Math.random()*3)

//loop test
console.log("Test for items")

for (item of item_list){
    console.log(item,item.alt, item_choice_dictionery[item.alt])
    let currentItem = item;
    item.addEventListener("click",() => {
        console.log(currentItem.alt);
    });
} 




gun_item.addEventListener("click",()=>{
    playerOneChoiceImg.style.visibility = "visible";
    playerOneChoiceImg.src=item_location_dictionary.gun;
    let randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
});






console.log(playerOneScore.textContent);