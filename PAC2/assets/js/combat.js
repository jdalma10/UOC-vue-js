import getPokemon from './pokeapi.js';
import { renderPoke, loadPoke } from './funcions.js';



const modal = document.querySelector('#modal')


// Carreguem 10 pokemons 
var pokemons = await loadPoke();

// Renderitzem els pokemons
renderPoke(pokemons)


// Logica de joc


var atac = 0;
var def = 0;
var cartaAtac = "";
var cartaDef = "";

var numClics = 0;

//a totes les cartes apliquem la funció gira al onclick
var cards = document.getElementsByClassName("card");

Array.from(cards).forEach(function (card) {
    card.addEventListener('click', function () {
        card.onclick = gira(card)
    });
    card.addEventListener('mouseover', function () {
        card.style.cursor = 'pointer';

    });
});





function gira(card) {


    numClics = numClics + 1;

    if (numClics == 1) {
        card.querySelector('.front').style.display='none';
        card.querySelector('.back').style.display='contents';

        //guardem a atac el "15%" convertint-lo a 15
        atac = +card.querySelector('.card-atac').innerHTML.slice(0, -1);
        cartaAtac = card.querySelector('.card-title').innerHTML;

        

    } else if (numClics == 2) {
        card.querySelector('.front').style.display='none';
        card.querySelector('.back').style.display='contents';

        def = +card.querySelector('.card-def').innerHTML.slice(0, -1);;
        cartaDef = card.querySelector('.card-title').innerHTML;

       //comprovació victoria
        if(atac>def){
           modal.querySelector('.modal-content').innerHTML = cartaAtac +" ataca i guanya a "+cartaDef;
        }else if(def>atac){
            modal.querySelector('.modal-content').innerHTML = cartaAtac +" ataca i perd contra "+cartaDef;
        }else{
            modal.querySelector('.modal-content').innerHTML = cartaAtac +" ataca i empata contra "+cartaDef;
        }

        modal.style.display = "block";

        //reset variables
        numClics = 0;
        atac = 0;
        def = 0;
        cartaAtac = ""
        cartaDef = "";

    }
}


  
    // Control inestra modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        tapaTotes();
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        tapaTotes();

        }
    }

    function tapaTotes(){
        Array.from(cards).forEach(function (card) {
    
            card.querySelector('.front').style.display='contents';
            card.querySelector('.back').style.display='none';

        });
    }


    // DaRK LIGHT MODE

const body = document.querySelector("body");

if (window.localStorage.getItem("mode") != null) {
    if (window.localStorage.getItem("mode") == "dark") {
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
    }
} else {
    body.classList.add("light");
}

document.getElementById("changeMode").addEventListener('click', function () {



    if (body.classList.contains('light')) {
        body.classList.remove("light");
        body.classList.add("dark");
        window.localStorage.setItem("mode", "dark");
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        window.localStorage.setItem("mode", "light");
    }

})
