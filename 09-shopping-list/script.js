const inputItem = document.querySelector("#item");
const addItemButton = document.querySelector("button");
const shoppinglist = document.querySelector("ul")
let listingNumber = 0;

addItemButton.addEventListener("click", function (e){
    e.preventDefault();
    const newlisting = document.createElement("li");
    newlisting.textContent = inputItem.value;
    newlisting.id = `entry-${listingNumber}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.id = `delete-${listingNumber}`
    console.log(deleteButton.id, newlisting.id)
    let idtodelete = newlisting.id;
    deleteButton.addEventListener("click", function (){
        let childToDelete = document.querySelector(`#${idtodelete}`);
        console.log(idtodelete, childToDelete)
        shoppinglist.removeChild(childToDelete);
    })

    //appending stuff
    newlisting.appendChild(deleteButton);
    shoppinglist.appendChild(newlisting);
    listingNumber++;
});
