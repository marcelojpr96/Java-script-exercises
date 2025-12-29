const container = document.querySelector("#container");

for(i=0;i<16*16;i++){
    let div = document.createElement("div");
    div.style.width = "calc(100%/16)";
    div.style.height = "calc(100%/16)";
    div.style.boxSizing ="border-box";
    div.style.border="1px solid red";
    //div.style.flexgrow="0"
    div.style.flex="0 0 auto"
    container.appendChild(div);
}