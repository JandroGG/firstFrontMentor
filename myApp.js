



function changeColorIn(event){
    let boton = document.getElementById(event.target.id);
    if(boton.style.backgroundColor !== 'rgb(251, 116, 19)'){
        boton.addEventListener("mouseout", changeColorOut, false);
        boton.style.backgroundColor = "hsl(217, 12%, 63%)";
    }
    boton.style.cursor = "pointer";
}

function changeColorOut(event){
    let boton = document.getElementById(event.target.id);
    boton.style.backgroundColor = "hsl(213, 19%, 18%)";
    boton.style.cursor = "normal"
}

function changeColorOrange(event){

    let boton = document.getElementById(event.target.id);
    boton.removeEventListener("mouseout", changeColorOut, false);
    let btnsPuntos = document.querySelectorAll(".puntuacion");
    const colorBtns = Array.from(btnsPuntos).map( item => item.style.backgroundColor === 'rgb(251, 116, 19)') //item naranjas?
    const found = colorBtns.find(element => element === true); //si hay un item naranja?

    if( found ){
        btnsPuntos[colorBtns.findIndex(item => item === true)].style.backgroundColor = "hsl(213, 19%, 18%)"; // apaga ese item naranja
        boton.style.backgroundColor = "hsl(25, 97%, 53%)"; // enciende el nuevo item narajan clickado
    }
    else{
        
        boton.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
}

function changeColorBtnVotarIn(){
    let btnVotar = document.querySelector(".btn-voto");
    btnVotar.style.backgroundColor = "hsl(217, 12%, 63%)";
    btnVotar.style.cursor = "pointer";
}

function changeColorBtnVotarOut(){
    let btnVotar = document.querySelector(".btn-voto");
    btnVotar.style.backgroundColor = 'rgb(251, 116, 19)';
    btnVotar.style.cursor = "pointer";
}

function votar(){
    const btnsPuntos = document.querySelectorAll(".puntuacion");
    const colorBtns = Array.from(btnsPuntos).map( item => item.style.backgroundColor === 'rgb(251, 116, 19)') //item naranjas?
    const found = colorBtns.find(element => element === true); //si hay un item naranja?
    if(found){
        resultado(colorBtns.findIndex(item => item === true)+1);
    }
    else{
        console.log('por favor elije una calificacion')
    }
}

function resultado(resultado){

    console.log('tu puntuacion es ', resultado);
    let cards = document.querySelector(".cards"); // padre contenedor se le asiganara el template
    let card = document.querySelector(".card");   // hijo eliminado
    cards.removeChild(card);

    const template = document.getElementById("thankyou").content;
    const fragment = document.createDocumentFragment();
    const clone = template.cloneNode(true);
    clone.querySelector(".resultado").textContent = resultado;
    fragment.appendChild(clone);
    cards.appendChild(fragment);
}

function _init(){
    let btnsPuntos = document.querySelectorAll(".puntuacion");
    let btnVotar = document.querySelector(".btn-voto");
    btnsPuntos.forEach((element) => {
        element.addEventListener("mouseover", changeColorIn, false);
        element.addEventListener("click", changeColorOrange, false);
    });

    btnVotar.addEventListener("mouseover", changeColorBtnVotarIn, false);
    btnVotar.addEventListener("mouseout", changeColorBtnVotarOut, false);
    btnVotar.addEventListener("click", votar, false);


}

window.addEventListener( "load" , _init, false);