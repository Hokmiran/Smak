let openMenu=document.getElementById("openMenu");
let x=window.matchMedia("(max-width:805px)")
let nextMenu=document.getElementById("nextMenu");
let count=false;
let secondMenu=document.getElementById("secondMenu")
openMenu.addEventListener("click", ()=>{
    secondMenu.style.transition=".1s"
    console.log(x)
    count = !count
    if(count && x.matches){
    nextMenu.classList.remove("deactive")
    nextMenu.classList.add("active")
    secondMenu.style.visibility="visible"
    }else{
    nextMenu.classList.remove("active")
    nextMenu.classList.add("deactive")
    secondMenu.style.visibility="hidden"
    } 
});