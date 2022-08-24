import getPokemon from './pokeapi.js';




const submit = document.querySelector('.search-submit')
const input = document.querySelector('.search-input')
const view = document.querySelector('#view')


var pokemons= []
for(let x=1;x<10;x++){
    const keyword = x;

    var pokemon = await getPokemon({ keyword });
    console.log(pokemon)
    pokemons.push(pokemon);
  
}

console.log(pokemons);

renderGifs(pokemons)

function renderGifs(pokemons) {
	const template = document.querySelector('#card-template').content
	const fragment = document.createDocumentFragment()

	pokemons.forEach(( poke ) => {
		template.querySelector('.card-title').innerHTML = poke.name
		template.querySelector('.card-image').setAttribute('src', poke.front_default)
		template.querySelector('.card-image').setAttribute('alt', poke.name)
        template.querySelector('.card-atac').innerHTML= poke.atac+"%"
        template.querySelector('.card-atac').setAttribute('style', "width:"+poke.atac+"%")
        template.querySelector('.card-def').innerHTML= poke.def+"%"
        template.querySelector('.card-def').setAttribute('style', "width:"+poke.def+"%")
		const clone = template.cloneNode(true)
		fragment.appendChild(clone)
	})

	view.appendChild(fragment)
}



var elements = document.getElementsByClassName("card");

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