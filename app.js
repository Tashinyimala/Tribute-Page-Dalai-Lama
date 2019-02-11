const main = document.querySelector('#main');
const text = main.querySelector('h1');

let isColor = false;

const change = () => {
    if(isColor) {
        text.style.color = 'blue';
        isColor = false;
    } else {
        text.style.color = '#FDD02F';
        isColor = true;
    }
};

text.addEventListener('mousemove', change);