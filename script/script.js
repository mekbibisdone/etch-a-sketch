const resetButton = document.querySelector('#reset');
const container = document.querySelector('#container');
container.style.gridTemplateColumns = `repeat(16,1fr)`;

for (let i = 0; i < 256;i++){
    let square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square =>{
    square.addEventListener('mouseover', function(e){
        e.target.classList.add('square-active');
    })
})
resetButton.addEventListener('click',()=>{
    squares.forEach(square =>{
    square.classList.remove('square-active');
})})

