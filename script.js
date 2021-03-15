var aTags= document.querySelectorAll(".header_content .selections a");
var body= document.body;
var hamburgerButton = document.getElementById("hamburgerButton");
var imageCrousel= document.querySelector(".selections");
var searchButton=document.getElementById("search_button");
var searchDiv= document.querySelector(".search_input");

imageCrousel.style.transition ="display ease-in-out 0.7s";
imageCrousel.style.display="visible";
window.addEventListener('resize', ()=>{
    console.log(body.clientWidth)
    if (body.clientWidth == 1200){
        location.reload();
        console.log("john doe")
    }});



aTags.forEach(tags=>{
    tags.addEventListener('click',function(){
        for(let i=0; i<aTags.length; i++){
            aTags[i].classList.remove("active");
        };
        tags.classList.add("active")

    })
})
hamburgerButton.addEventListener("click",()=>{
    console.log("clicked",imageCrousel.clientWidth)
    if(imageCrousel.clientWidth>0){
        imageCrousel.style.transition ="display ease-in-out 0.7s";
    imageCrousel.style.display="none";
    }
    else{
    imageCrousel.style.transition ="display ease-in-out 0.7s";
    imageCrousel.style.display="flex";
    }
    });