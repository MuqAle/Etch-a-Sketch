const container = document.querySelector('.grid-container')


function makeDivs(divs){
    let dimensions = divs**2
    for (let i = 0; i <= dimensions -1; i++ ){
        const box = document.createElement('div')
        box.className = 'box';
        container.appendChild(box);
    }
    container.style.gridTemplateRows = `repeat(${divs}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${divs}, 1fr)`;
};

makeDivs(16);

// container.addEventListener('mousedown', function (e) {
//     console.log(e)})

function changeBoxColor(e){
    e.target.style.background = 'gray';
    e.stopPropagation; 
};

container.children.addEventListener('click', changeBoxColor)
    
 


