const carousel = document.querySelector(".carousel__blocks");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper .btn");
let isDragStart = false,prevPageX,prevScrollLeft;

arrowIcons.forEach(icon => {
    icon.addEventListener("click",()=>{
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "perv" ? -firstImgWidth : firstImgWidth;
        

    })
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    carousel.classList.add("dragging");
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}
carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",dragStop);
