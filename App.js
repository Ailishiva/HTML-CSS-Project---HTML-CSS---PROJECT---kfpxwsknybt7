
let content = document.querySelectorAll('.content');
let icons = document.querySelectorAll('nav ul li');

icons.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllImages();
        hideAllIcons();

        item.classList.add('active');
        content[idx].classList.add('show');
        
    })
})

function hideAllImages() {
     content.forEach((img) => {
        img.classList.remove('show');
    })
}

function hideAllIcons() {
    icons.forEach((item) => {
        item.classList.remove('active');
    })
}
