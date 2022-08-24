import getPokemon from './pokeapi.js';
import {renderPoke, showInfo} from './funcions.js';




const submit = document.querySelector('.search-submit')
const input = document.querySelector('.search-input')
const view = document.querySelector('#view')
const modal = document.querySelector('#modal')

// Carreguem 10 pokemons 
var pokemons= []
for(let x=1;x<10;x++){
    const keyword = x;
    var pokemon = await getPokemon({ keyword });
    console.log(pokemon)
    pokemons.push(pokemon);
  
}


// Renderitzem els pokemons
renderPoke(pokemons)


/* // Lògica de si ampliem 1 pokemon

 // consultar si hi ha algun paràmetre a la URL
 let params = new URLSearchParams(document.location.search);
 let poke = params.get("poke");


 
 if (poke) {

    let card = document.querySelector("[href='?poke="+poke+"']");
   
    // modificar el text del missatge
   card.querySelector('.back').innerHTML = `El paràmetre de la url és <strong>${poke}</strong><a id="torna" href="javascript:history.back()">Tornar</a>`;

   card.querySelector('.front').setAttribute('hidden',true);      
   card.querySelector('.back').removeAttribute('hidden');

 } else {
    var elements = document.getElementsByClassName("card");

    Array.from(elements).forEach(function(element) {
       
            element.querySelector('.front').removeAttribute('hidden');
            element.querySelector('.back').setAttribute('hidden',true);
        
      });

 }
 */






// Trgetes giratories

/* var elements = document.getElementsByClassName("card");

Array.from(elements).forEach(function(element) {
        element.addEventListener('mouseover', function(){
            element.querySelector('.front').setAttribute('hidden',true);
            
            element.querySelector('.back').removeAttribute('hidden');
        });
      });
  
  
Array.from(elements).forEach(function(element) {
        element.addEventListener('mouseout', function(){
            element.querySelector('.front').removeAttribute('hidden');
            element.querySelector('.back').setAttribute('hidden',true);
        });
      });
 */

// DaRK LIGHT MODE

const body = document.querySelector("body");

if(window.localStorage.getItem("mode")!=null){
    if(window.localStorage.getItem("mode")=="dark"){
        body.classList.remove("light");
        body.classList.add("dark");
       }else{
        body.classList.remove("dark");
        body.classList.add("light");
       }
}else{
    body.classList.add("light");
}

document.getElementById("changeMode").addEventListener('click',function(){
   
  
   
    if(body.classList.contains('light')){
        body.classList.remove("light");
        body.classList.add("dark");
        window.localStorage.setItem("mode","dark");
   }else{
        body.classList.remove("dark");
        body.classList.add("light");
        window.localStorage.setItem("mode","light");
   }
 
})




    // Si cliquem un pokemon

    //var modal = document.getElementById("modal");
    var cards = document.getElementsByClassName("card");

    Array.from(cards).forEach(function(card) {
        card.addEventListener('mouseover', function(){
            card.style.cursor = 'pointer';
            card.onclick = function() {
                modal.style.display = "block";
                let pokemon = card.getAttribute('id');
            
                showInfo(pokemon);
            }
        });
      });
  
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
