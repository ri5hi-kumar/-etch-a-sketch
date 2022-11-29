const grid = document.querySelector('.grid');

const createGrid = () => {
    for(let i = 1; i <= 256; i++){
        const box = document.createElement('div');
        box.classList.add('cell');
        grid.append(box);
        box.addEventListener('mouseover', function(){
            box.style.backgroundColor = getRandomColor();
        })
    }
}


createGrid();


const getRandomColor = () =>{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}