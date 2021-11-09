const container = document.querySelector('#container');
const containerStyle = window.getComputedStyle(container);
const containerWidth = 496.262;
const containerheight = 496.262;
const containerArea = containerWidth * containerheight;
const squareWidth = Math.sqrt(containerArea / 256);

for (let i = 0; i < 256;i++){
    let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square =>{
    square.style.cssText = `width: ${squareWidth}px`;
})
