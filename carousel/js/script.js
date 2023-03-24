const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const images = document.querySelectorAll(".slider-image");
const dots = document.querySelectorAll(".dot");

let counter = 0;

rightArrow.addEventListener("click", ()=>{
    images[counter].classList.remove("active");
    images[counter].classList.add("not-active");
    dots[counter].classList.remove("dot-active");

    counter++;
    if(counter > images.length - 1) counter = 0;

    images[counter].classList.remove("not-active");
    images[counter].classList.add("active");
    dots[counter].classList.add("dot-active");
})

leftArrow.addEventListener("click", ()=>{
    images[counter].classList.remove("active");
    images[counter].classList.add("not-active");
    dots[counter].classList.remove("dot-active");

    counter--;
    if(counter < 0) counter = images.length - 1;

    images[counter].classList.remove("not-active");
    images[counter].classList.add("active");
    dots[counter].classList.add("dot-active");
})

for(let i= 0; i < dots.length ; i++){
    dots[i].addEventListener("click", ()=>{
        
    })
}