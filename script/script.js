const resetButton = document.querySelector('#reset');
const container = document.querySelector('#container'); 
const rainbowButton = document.querySelector('#rainbow');
const blackButton = document.querySelector('#black');
const grayScaleButton = document.querySelector('#greyScale');
const whiteButton = document.querySelector('#white');
let mode = 0;
squareNumb = askForGridNUmb();
createGrid(squareNumb,mode);

function createGrid(squareNumb,mode){
    container.style.gridTemplateColumns = `repeat(${squareNumb},1fr)`;
    for (let i = 0; i < squareNumb * squareNumb;i++){
        let square = document.createElement('div');
        square.classList.add('square');
        container.append(square);
    }
    
    const squares = document.querySelectorAll('.square');
    
    if (mode === 0){
        black(squares);
    }

    else if (mode === 1){
        rainbow(squares);
    }
    else 
        greyScale(squares);

    rainbowButton.addEventListener('click',()=>{
        rainbow(squares);
    })

    blackButton.addEventListener('click',()=>{
        black(squares);
    })
    grayScaleButton.addEventListener('click',()=>{
        greyScale(squares);
    })
    whiteButton.addEventListener('click',()=>{
        white(squares);
    })
}

function askForGridNUmb(){
    squareNumb = window.prompt("how many squares per side would you like(0-100): ");
    if (squareNumb < 0 || squareNumb > 100)
        return askForGridNUmb();
    else
        return squareNumb;
}

function removeSquares(){
    while(container.firstElementChild)
        container.removeChild(container.firstElementChild);
}

function getRandomInt(max){
    return parseInt(Math.random()* max);
}

function black(squares){
    squares.forEach(square =>{
        square.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = `black`;
        })
    }); mode = 0;
}

function rainbow(squares){
    squares.forEach(square =>{
        square.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
        })
    }); mode = 1;
}

function greyScale(squares){
    squares.forEach(square =>{
        let counter = 80;
        square.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = `hsl(0,0%,${counter}%)`;
            if (counter > 0)
                counter -= 10;
        })
    });mode = 2;
}
function white(squares){
    squares.forEach(square=>{
        square.addEventListener('mouseover',function(e){
            e.target.style.backgroundColor = 'white';
        })
    })
}
resetButton.addEventListener('click', ()=>{
    removeSquares();
    createGrid(askForGridNUmb(),mode);
})


