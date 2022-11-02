const container = document.querySelector('.grid-container');
const color = document.querySelector('#box-color');
const clearBtn = document.querySelector('#clear');
const slider = document.querySelector('#slider');
const output = document.querySelector("#dimensions");
const eraserBtn = document.querySelector("#eraser");
const penBtn = document.querySelector("#pen");
const randomBtn = document.querySelector('#random-color');
const buttons = document.querySelectorAll(".button-categories");




slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`;
};



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

function randomNumber(){
    return Math.floor(Math.random() * 256)
};


function randomColor(e){

    e.target.style.background = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    e.target.classList.add('colored');
    container.style.removeProperty('background');
};

function clearEverything(){
    try
    {
    for (let child in container.children){
    container.children[child].removeAttribute('style');
    container.children[child].classList.remove('colored');
    };
    } 
    catch(err){}; 
};

function eraseColor(e){

    e.target.style.removeProperty('background');
    e.target.classList.remove('colored');
}


function usingPen(){
    
     container.addEventListener('mousemove', function(e){
        if (e.buttons == 1){
            changeBoxColor(e);
            e.preventDefault();
        }});
    container.addEventListener('click', changeBoxColor);
};


function usingEraser(){

    container.addEventListener('mousemove', function(e){
        if (e.buttons == 1){
            eraseColor(e);
            e.preventDefault();
        }});
    container.addEventListener('click', eraseColor);
}

function usingRandomizer(){

    container.addEventListener('mousemove', function(e){
        if (e.buttons == 1){
            randomColor(e);
            e.preventDefault();
        }});
    container.addEventListener('click', randomColor);
}

// function clickBtn(e){
//     if(e.target.classList.contains("btn")){
//         for(button in buttons)
//         buttons.forEach(function(button){
//         button.classList.remove("active");
//         });
//         e.target.classList.add("active");  
//      };
// };

             

function events(){
    makeDivs();
    usingPen();
    randomBtn.addEventListener('click', () => {usingRandomizer()});
    penBtn.addEventListener('click',() => {usingPen()});
    eraserBtn.addEventListener('click', () => {usingEraser()});
    clearBtn.addEventListener('click', () => {clearEverything()});
    slider.addEventListener('input', () => {
        container.replaceChildren();
        makeDivs()});
    document.addEventListener("click", function(evt){
        if(evt.target.classList.contains("button-categories")){
            buttons.forEach(function(button){
                button.classList.remove("active");
    });
        evt.target.classList.add("active");
  }
});
    
}








events();

