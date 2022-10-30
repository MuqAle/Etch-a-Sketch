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


function events(){
    container.addEventListener('mousemove', function(e){
        if (e.buttons == 1){
            changeBoxColor(e)
        }});
    container.addEventListener('click', changeBoxColor);
}


function changeBoxColor(e){
    e.target.style.background = 'gray';
    e.target.classList.add('colored');
    container.style.removeProperty('background');
    
};

makeDivs(16);

events()









    
 


