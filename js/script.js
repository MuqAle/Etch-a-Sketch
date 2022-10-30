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


function changeBoxColor(e){
    if (e.buttons == 1){
    e.target.style.background = 'gray'; }
    container.style.removeProperty('background')
};

container.addEventListener('mousemove', changeBoxColor)





    
 


