let divs=document.querySelectorAll(".colors div");
let main=document.querySelector(".main")
if(localStorage.getItem("color")){
    main.style.backgroundColor=localStorage.getItem("color");
    divs.forEach((div)=>{
        div.classList.remove("active")
    });
    document.querySelector(`[data-color=${localStorage.getItem("color")}]`).classList.add("active")
}
divs.forEach((div)=>{
    div.addEventListener("click",(e)=>{
        // console.log(e.currentTarget.dataset.color)
        divs.forEach((div)=>{
            div.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
        localStorage.setItem("color",e.currentTarget.dataset.color)
        main.style.backgroundColor=localStorage.getItem("color");
    })
})