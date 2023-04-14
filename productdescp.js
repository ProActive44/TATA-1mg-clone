let i1=document.getElementById("muliple_img1").src;
let i2=document.getElementById("muliple_img2").src;
let i3=document.getElementById("muliple_img3").src;
let i4=document.getElementById("muliple_img4").src;

document.getElementById("muliple_img1").addEventListener("click", () => {
var img1 = document.getElementById("main_img_1");
img1.src = i1;
// img1.style.height = "560px";
// img1.style.width = "420px";
})
document.getElementById("muliple_img2").addEventListener("click", () => {
document.getElementById("main_img_1").src = i2;
})
document.getElementById("muliple_img3").addEventListener("click", () => {
document.getElementById("main_img_1").src = i3;
})
document.getElementById("muliple_img4").addEventListener("click", () => {
document.getElementById("main_img_1").src = i4;
})