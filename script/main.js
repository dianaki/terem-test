const leftButton = document.querySelector('.button--white');
const blockTitle = document.querySelector('.block__title');
const textTitle = document.querySelector('.block__title').textContent;
const descText = document.querySelector('.desc__text--remove');
const textDesc = document.querySelector('.desc__text--remove').textContent;
const fontSizeDesc = document.querySelector('.desc__text').style.fontSize;

const rightButton = document.querySelector('.button--red');
const infoContainer = document.querySelector('.info__container');
const blocks = document.querySelectorAll('.block');

function toogleTitle() {
    blockTitle.classList.toggle('hide');

    if (blockTitle.classList.contains('hide')) {
        descText.innerHTML = textTitle;
        descText.style.fontSize = '36px';
    } else {
        descText.innerHTML = textDesc;
        descText.style.fontSize = fontSizeDesc;
    }
}

function toogleBlocks() {
    infoContainer.insertBefore(blocks[4], blocks[3]);
    blocks[3].classList.toggle('replaced');

    if (blocks[3].classList.contains('replaced')) {
        infoContainer.insertBefore(blocks[3], blocks[4]);
    }
}

leftButton.addEventListener('click', toogleTitle);
rightButton.addEventListener('click', toogleBlocks);