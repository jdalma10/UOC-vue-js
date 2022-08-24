import getPokemon from './pokeapi.js';
import { renderPoke, showInfo } from './funcions.js';




const submit = document.querySelector('.search-submit')
const input = document.querySelector('.search-input')
const view = document.querySelector('#view')
const modal = document.querySelector('#modal')


// Carreguem 10 pokemons 
var pokemons = [];
var pokeNumber=[];
for (let x = 1; x < 10; x++) {
    let num = Math.floor(Math.random() * 100);
   /*  while (pokeNumber.includes(num)){
        num = Math.floor(Math.random() * 100);
    } */
    console.log(num);
    pokeNumber.push(num);
    const keyword = num;
    var pokemon = await getPokemon({ keyword });
    //console.log(pokemon)
    pokemons.push(pokemon);

}


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
    console.log(card);

    numClics = numClics + 1;

    if (numClics == 1) {
        card.querySelector('.back').removeAttribute('hidden');
        atac = card.querySelector('.card-atac').innerHTML;
        cartaAtac = card.querySelector('.card-title').innerHTML;

        

    } else if (numClics == 2) {

        card.querySelector('.back').removeAttribute('hidden');
        def = card.querySelector('.card-def').innerHTML;
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
            card.querySelector('.back').setAttribute('hidden',true);
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
