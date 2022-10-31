const container = document.querySelector('.grid-container')
const color = document.querySelector('#box-color')
const clearBtn = document.querySelector('#clear')
const slider = document.querySelector('#slider')
const output = document.querySelector("#dimensions")


slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`;
}



function makeDivs(divs = Number(slider.value)){
    let dimensions = divs**2
    for (let i = 0; i <= dimensions -1; i++ ){
        const box = document.createElement('div')
        box.className = 'box';
        container.appendChild(box);
    }
    container.style.gridTemplateRows = `repeat(${divs}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${divs}, 1fr)`;
};

function changeBoxColor(e){
    e.target.style.background = `${color.value}`;
    e.target.classList.add('colored');
    container.style.removeProperty('background');
    
};

function clearEverything(){
    try
    {
    for (let child in container.children){
    container.children[child].removeAttribute('style')
    container.children[child].classList.remove('colored')
    }
    }  
    catch(err){} 
}
             

function events(){
    container.addEventListener('mousemove', function(e){
        if (e.buttons == 1){
            changeBoxColor(e)
            e.preventDefault()
        }});
    container.addEventListener('click', changeBoxColor);
    clearBtn.addEventListener('click', () => {clearEverything()});
    slider.addEventListener('input', () => {
        container.replaceChildren();
        makeDivs()})
}


makeDivs()

events()








console.log(typeof(Number(slider.value)))









    
 


