let myImage = document.querySelector("img");

myImage.onclick = () => {
    let imgSrc = myImage.getAttribute("src");
    if (imgSrc === "images/mozilla.png") {
        myImage.setAttribute('src', 'images/firefox-2.png');
    } else {
        myImage.setAttribute('src', 'images/mozilla.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = setUserName;

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}