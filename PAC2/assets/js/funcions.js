import getPokemon from './pokeapi.js';

/* function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(1000));


export function loadPoke(){
    var pokemons = []
    for (let x = 1; x < 10; x++) {
        const keyword = getRandomInt(1000);
    
        var pokemon = await getPokemon({ keyword });
        //console.log(pokemon)
        pokemons.push(pokemon);
    
    }
    return pokemons;
} */

export  function renderPoke(pokemons) {
	const template = document.querySelector('#card-template').content
	const fragment = document.createDocumentFragment()

	pokemons.forEach(( poke ) => {
        template.querySelector('.card').setAttribute('id',poke.id);
      
        //template.querySelector('a').setAttribute('href',    "?poke="+poke.id);
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


export function showInfo(poke) {
    alert(poke);  // este alert realemte devuelve id clicado

    var pokemon =  getPokemon({ poke });
    modal.querySelector('.modal-content').innerHTML = pokemon.name ;
 	


} 