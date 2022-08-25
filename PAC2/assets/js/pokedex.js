import getPokemon from './pokeapi.js';
import {loadPoke, renderPoke, findPoke, showInfo, cerca} from './funcions.js';




const submit = document.querySelector('.search-submit')
const input = document.querySelector('.search-input')
const view = document.querySelector('#view')
const modal = document.querySelector('#modal')
const info = document.querySelector('#card-info')

// Carreguem  pokemons 
var pokemons= await loadPoke();

// Renderitzem els pokemons
renderPoke(pokemons);

 




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

// LOGICA DARK LIGHT MODE

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




    // lLÒGICA DE AMPLIAR INFO POKEMON

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
            modal.querySelector('.modal-content').innerHTML=""
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
            modal.style.display = "none";
            
            }
        }


    // LÒGICA DE CERCA

        var typingTimer;               
        var doneTypingInterval = 1500;
        var searchBtn = document.getElementById("search");
        searchBtn.addEventListener('click',cerca);

        var search = document.getElementById("searchInput");

        //on keyup, start the countdown
        search.addEventListener('keyup', function () {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        });
    
        //on keydown, clear the countdown 
        search.addEventListener('keydown', function () {
            clearTimeout(typingTimer);
        });
    
        //user is "finished typing," do something
        function doneTyping () {
            searchBtn.click();
        }

   

  
