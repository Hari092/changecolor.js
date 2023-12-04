document.getElementById('changeColorButton').addEventListener('click',function(){
    let changeColor=randomColor();
    document.body.style.background=changeColor;
})  
function randomColor(){
    let letter="0123456789ABCDEF";
    let prefix="#";
    for(let i=0;i<6;i++){
        prefix+=letter[Math.floor(Math.random()*16)]
    }
    return prefix;
}
document.getElementById('submit').addEventListener('click',function(){
    document.querySelector(".submit").textContent="changed color";
    let newColor=document.getElementsByClassName("submit")[0];
    newColor.style.backgroundColor="#808080";
})