// ----- For Slideshow in part-1 ---------------------------------------
var counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);
// ----------------------------------------------------------------------

var windowWidth = window.innerWidth;
console.log("Window width: " + windowWidth + "px");


// ---- For slide buttons in part-4 -----------------------------------------------------

var lastWidth;
let leftShift = 300;
document.querySelector("#part-4 .pseudonext").addEventListener("click", function(){
    console.log("call"+leftShift+" "+lastWidth )
    document.querySelector("#part-4 .pseudoprev").style.opacity = "1"
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-4 .pseudonext").style.transition = "1s"
    document.querySelector("#part-4 .healthConcernsDivs").style.margin = `0 0 0 -${leftShift}px`
    document.querySelector("#part-4 .healthConcernsDivs").style.transition = "1s"
    leftShift += 300;
    
    if(windowWidth<500){
        lastWidth=1600
    }else if(windowWidth<700){
        lastWidth=1200
    }else if(windowWidth<1000){
        lastWidth=900
    }else if(windowWidth<1400){
        lastWidth=600
    }else{
        lastWidth=300;
    }

    if(leftShift>lastWidth){
        document.querySelector("#part-4 .pseudonext").style.opacity = "0"
        leftShift = 300;
    }
})

// let rightShift = 0;
document.querySelector("#part-4 .pseudoprev").addEventListener("click", function(){
    // console.log("call")
    document.querySelector("#part-4 .pseudoprev").style.opacity = "0"
    document.querySelector("#part-4 .pseudoprev").style.transition = "1s"
    document.querySelector("#part-4 .pseudonext").style.opacity = "1"

    document.querySelector("#part-4 .healthConcernsDivs").style.margin = "0 0 0 0"
    document.querySelector("#part-4 .healthConcernsDivs").style.transition = "1s" 
    leftShift = 300;
})
// -------------------------------------------------------------------------------------


// ---- For slide buttons in part-5 ---------------------------------------------------


var part5_lastWidth;
let part5_LeftShift = 300;
document.querySelector("#part-5 .pseudonext").addEventListener("click", function(){
    console.log("call"+part5_LeftShift+" "+part5_lastWidth )
    document.querySelector("#part-5 .pseudoprev").style.opacity = "1"
    // document.querySelector(".pseudonext").style.opacity = "0"
    document.querySelector("#part-5 .pseudonext").style.transition = "1s"
    document.querySelector("#part-5 .healthConcernsDivs").style.margin = `0 0 0 -${part5_LeftShift}px`
    document.querySelector("#part-5 .healthConcernsDivs").style.transition = "1s"
    part5_LeftShift += 300;
    
    if(windowWidth<500){
        part5_lastWidth=1600
    }else if(windowWidth<700){
        part5_lastWidth=1200
    }else if(windowWidth<1000){
        part5_lastWidth=900
    }else if(windowWidth<1400){
        part5_lastWidth=600
    }else{
        part5_lastWidth=300;
    }

    if(part5_LeftShift>part5_lastWidth){
        document.querySelector("#part-5 .pseudonext").style.opacity = "0"
        part5_LeftShift = 300;
    }
})

document.querySelector("#part-5 .pseudoprev").addEventListener("click", function(){
   
    document.querySelector("#part-5 .pseudoprev").style.opacity = "0"
    document.querySelector("#part-5 .pseudoprev").style.transition = "1s"
    document.querySelector("#part-5 .pseudonext").style.opacity = "1"

    document.querySelector("#part-5 .healthConcernsDivs").style.margin = "0 0 0 0"
    document.querySelector("#part-5 .healthConcernsDivs").style.transition = "1s" 
    part5_LeftShift = 300;
})


// -------------------------------------------------------------------------------