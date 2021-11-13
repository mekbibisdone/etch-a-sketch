const resetButton = document.querySelector('#reset');
const container = document.querySelector('#container');
let squareNumb = parseInt(askForGridNUmb());
createGrid(squareNumb);

function createGrid(squareNumb){
    container.style.gridTemplateColumns = `repeat(${squareNumb},1fr)`;
    for (let i = 0; i < squareNumb * squareNumb;i++){
        let square = document.createElement('div');
        square.classList.add('square');
        container.append(square);
    }
    const squares = document.querySelectorAll('.square');
    sqaureAddListener(squares);
}

function sqaureAddListener(squares){
    squares.forEach(square =>{
        square.addEventListener('mouseover', function(e){
            e.target.classList.add('square-active');
        })
    })
}

function askForGridNUmb(){
    return window.prompt("how many squares per side would you like: ");
}

resetButton.addEventListener('click', ()=>{
    removeSquares();
    createGrid(askForGridNUmb());
})

function removeSquares(){
    while(container.firstElementChild)
        container.removeChild(container.firstElementChild);
}

