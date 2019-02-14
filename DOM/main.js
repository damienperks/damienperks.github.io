function changeFontSize(x) {
    document.getElementsByClassName("no-img")[0].style.fontSize = x + "px";
    document.getElementsByClassName("no-img")[1].style.fontSize = x + "px";
    document.getElementsByClassName("no-img")[2].style.fontSize = x + "px";
    }

function increaseFontSize (paragraph) {
    fontSizeNow = parseInt (document.getElementById(paragraph).style.fontSize.slice(0, document.getElementById(paragraph).style.fontSize.length - 2));
    if (fontSizeNow >= 30) {
        console.log("Font size too big");
        } else {
            document.getElementById(paragraph).style.fontSize = fontSizeNow + 1 + "px";
            }
    console.log(document.getElementById(paragraph).style.fontSize);
    }

function decreaseFontSize (paragraph) {
    fontSizeNow = parseInt (document.getElementById(paragraph).style.fontSize.slice(0, document.getElementById(paragraph).style.fontSize.length - 2));
    if (fontSizeNow <= 10) {
        console.log("Font size too small");
        } else {
            document.getElementById(paragraph).style.fontSize = (fontSizeNow - 1) + "px";
            }
    console.log(document.getElementById(paragraph).style.fontSize);
    }

function changeColor() {
    document.getElementsByClassName("no-img")[0].style.color = "green";
    document.getElementsByClassName("no-img")[1].style.color = "yellow";
    document.getElementsByClassName("no-img")[2].style.color = "red";
    }

function changeBgColor(color) {
    document.body.style.backgroundColor = color;
    }

function copyContent(paragraph1, paragraph2) {
    let clone = document.getElementById(paragraph2).innerText;
    document.getElementById(paragraph1).innerText = clone;
    }
