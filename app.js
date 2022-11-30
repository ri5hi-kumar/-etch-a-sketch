const DEFAULT_SIZE = 16

const grid = document.querySelector('.grid');
const slider = document.querySelector('#slider');

const createGrid = (size) => {
    for(let i = 1; i <= size * size; i++){
        const box = document.createElement('div');
        box.classList.add('cell');
        grid.append(box);
        grid.style.gridTemplateColumns = `repeat(${size}, 2fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 2fr)`;
        box.addEventListener('mouseover', function(){
            box.style.backgroundColor = getRandomColor();
        })
    }
}

slider.addEventListener('change', function(e){
    grid.innerHTML = '';
    let newSize = parseInt(e.target.value);
    createGrid(newSize);
})

const getRandomColor = () =>{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}


window.onload = () =>{
    createGrid(DEFAULT_SIZE);
}