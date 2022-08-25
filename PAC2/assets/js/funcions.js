import getPokemon from './pokeapi.js';

// Carreguem 10 pokemons 




export async function loadPoke(search){


    var pokemons = [];
    var pokemon;


    if (search){
        search.forEach(function(poke){
            console.log(poke)
            
            pokemon = getPokemon({ keyword:poke });
            //pokemons.push(pokemon);
    });
    }else{
        var pokeNumber=[];
        for (let x = 1; x < 10; x++) {
            let num = Math.floor(Math.random() * 151);

            //mirem que no estigui ja carregat
            while (pokeNumber.includes(num)||num==0){
                num = Math.floor(Math.random() * 151);
            } 
            //l'intorduim a la llista per no repetir
            pokeNumber.push(num);
    
            pokemon = await getPokemon({ keyword : num });
            pokemons.push(pokemon);

        }
    }
    return pokemons;
} 


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


export async function showInfo(poke) {


var pokemon =  await getPokemon({ keyword:poke });
    modal.querySelector('.modal-content').innerHTML = pokemon.name ;

} 


// Buscar el pokemon/s
export async function cerca () {

    var matchPokemons = []

    // Cridem a la api 
    var pokemon =  await getPokemon({limit:151});
    console.log(pokemon);

    // REcuperem la cadena

    let textCerca = document.getElementById("searchInput").value;
    console.log(textCerca);
    pokemon.forEach(function(poke) {
    ;
    if (poke.name.includes(textCerca)) {

        //obtenim l'id partint la url
        let id = poke.url.split("/").reverse()[1];
        matchPokemons.push(id);
    }
    }) 

    //eliminem pokemons carregats random
    document.getElementById('view').innerHTML = "";

    //posem els que casen
    var searchPokemons = await loadPoke(matchPokemons);
    renderPoke(searchPokemons);



}
