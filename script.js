var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var currrentCss = document.querySelector("h2");
var button = document.querySelector("button");

input1.value = "#ff0000";
input2.value = "#ffff00";
currrentCss.textContent = "CSS : " 
+ "linear-gradient(to right, " 
+ "rgb(255, 0, 0)" + ", " 
+ "rgb(255, 255, 0)" + ").";

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ input1.value 
	+ ", " 
	+ input2.value
	+ ")";
	css.textContent = "CSS now : "+ body.style.background + ".";
}

// function randomRGB() {
//   var x = Math.floor(Math.random() * 256);
//   var y = Math.floor(Math.random() * 256);
//   var z = Math.floor(Math.random() * 256);
//   var RGBColor = "#" + x + y + z;  
//   return RGBColor;
// }

function randomColor(){
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	input1.value = "#" + randomColor1;
	input2.value = "#" + randomColor2
}

input1.addEventListener("input",setGradient);
input2.addEventListener("input",setGradient);
button.addEventListener("click",randomColor);
button.addEventListener("click",setGradient);
