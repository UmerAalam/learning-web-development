const images = document.querySelectorAll(".image-grid > button");
const overviewEl = document.querySelector('#overview');
const overviewImgEl = overviewEl.querySelector('#overview-img');
const closeBtnEl = document.querySelector("#overview > button")

let selectedImage = null;

function focusImage(button) {
    selectedImage = {
        src: button.target.src,
        alt: button.target.alt
    }
    
    overviewEl.classList.remove('hidden');
    overviewEl.classList.add('filled');

    overviewImgEl.setAttribute('src', selectedImage.src)
    overviewImgEl.setAttribute('alt', selectedImage.alt)
}

closeBtnEl.addEventListener('click', () => {
    selectedImage = null;
    overviewEl.classList.remove('filled');
    overviewEl.classList.add('hidden');

})
images.forEach((image) => {
    image.addEventListener("click", focusImage);
});