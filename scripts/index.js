
// Define Dice Variables

var d20 = document.querySelector("#d20");
var d12 = document.querySelector("#d12");
var d10 = document.querySelector("#d10");
var d8 = document.querySelector("#d8");
var d6 = document.querySelector("#d6");
var d4 = document.querySelector("#d4");

// Dice Roll Functions

function d20Roll() {
    var d20Result = Math.floor(Math.random() * 20) + 1;
    var d20Image = "./images/d20_" + d20Result + ".png";
    d20.setAttribute("src", d20Image);
}
function d12Roll() {
    var d12Result = Math.floor(Math.random() * 12) + 1;
    var d12Image = "./images/d12_" + d12Result + ".png";
    d12.setAttribute("src", d12Image);
}
function d10Roll() {
    var d10Result = Math.floor(Math.random() * 10) + 1;
    var d10Image = "./images/d10_" + d10Result + ".png";
    d10.setAttribute("src", d10Image);
}
function d8Roll() {
    var d8Result = Math.floor(Math.random() * 8) + 1;
    var d8Image = "./images/d8_" + d8Result + ".png";
    d8.setAttribute("src", d8Image);
}
function d6Roll() {
    var d6Result = Math.floor(Math.random() * 6) +1
    var d6Image = "./images/d6_" + d6Result + ".png";
    d6.setAttribute("src", d6Image);
}
function d4Roll() {
    var d4Result = Math.floor(Math.random() * 4) +1;
    var d4Image = "./images/d4_" + d4Result + ".png";
    d4.setAttribute("src", d4Image);
}

// Dice Roll Triggers

d20.addEventListener("click", d20Roll);
d12.addEventListener("click", d12Roll);
d10.addEventListener("click", d10Roll);
d8.addEventListener("click", d8Roll);
d6.addEventListener("click", d6Roll);
d4.addEventListener("click", d4Roll);