let nextButton = document.getElementById("nextbtn")
let prevButton = document.getElementById("prevbtn")
let sliderDom= document.querySelector(".slider")
console.log(sliderDom)
let listDom = document.querySelector(".slider .list")
let thumbs = document.querySelector(".slider .thumbnails")

nextButton.onclick = function() {
    showSlider("next_slider")
    
}
prevButton.onclick= function() {
    showSlider("perv_slider")
}
let runningTime = 3000;
let autoRun =7000;
let runTimeOut
let running = setTimeout(() => {
    nextButton.click();
}, autoRun)
function showSlider(type){
    let itemSlider  = document.querySelectorAll(".slider .list .item")
    let thumbnailItems = document.querySelectorAll('.slider .thumbnails .item');
    if(type === "next_slider"){
        listDom.appendChild(itemSlider[0]);
        thumbs.appendChild(thumbnailItems[0]);
         sliderDom.classList.add("next")
    }else{
        let lastItem = itemSlider.length-1
    listDom.prepend(itemSlider[lastItem])
        thumbs.prepend(thumbnailItems[lastItem])
        sliderDom.classList.add("perv")
    }

    clearTimeout(runTimeOut);
    runTimeOut=setTimeout(()=>{
        sliderDom.classList.remove("next")
        sliderDom.classList.remove("perv")
    },runningTime)

    clearTimeout(running);
    running = setTimeout(() => {
        nextButton.click();
    }, autoRun)
}
