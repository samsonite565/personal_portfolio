let readTag = document.querySelector('.readmore');
let paragraph = document.querySelector('.p2');
function readMore() {
    //Toggle the read more on and off so that it shows the paragraph
    paragraph.classList.toggle('p2');
    readTag.style.display='none'
};
readTag.addEventListener('click', readMore);