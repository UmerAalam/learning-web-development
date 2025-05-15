const textArea = document.querySelector("textarea");
const counterText = document.querySelector(".counter");
const counterContainer = document.querySelector(".counter-container");
function getCharacterCount() {
    counterText.innerHTML = `${textArea.textLength}`;
    if(textArea.textLength > 50) {
        counterContainer.style.color ="red";
    }
    else {
        counterContainer.style.color ="brown";
    }
}
console.log(textArea.textLength);
textArea.addEventListener("input",getCharacterCount);