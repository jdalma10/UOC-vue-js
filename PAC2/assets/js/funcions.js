// cometari: en general, s'hauria de netejar el codi que no s'utilitza, ja que pot generar certa dificultat a l'hora de seguir el codi i mirar com funciona.
// comentari: bon punt que les funcions estiguin comentades amb una breu explicació del que fan

import getPokemon from './pokeapi.js';

// Carreguem 10 pokemons 

export async function loadPoke(){
 
    let pokemons = [];
    let pokemon;
    let pokeNumber=[]; //conté els pokemons seleccionats

    for (let x = 1; x < 10; x++) {
        let num = Math.floor(Math.random() * 151);

        //mirem que no estigui ja carregat
        // comentari: bon control de repetits
        while (pokeNumber.includes(num)||num==0){
            num = Math.floor(Math.random() * 151);
        } 
        //l'intorduim a la llista per no repetir
        pokeNumber.push(num);

        pokemon = await getPokemon({ keyword : num });
        pokemons.push(pokemon);

    }
    

    return pokemons;
} 

// comentari: bon ús de templates per carregar el contingut
export  function renderPoke(poke) {
    const template = document.querySelector('#card-template').content
    const fragment = document.createDocumentFragment()
    
    template.querySelector('.card').setAttribute('id',poke.id);
    template.querySelector('.card').setAttribute('data-id',poke.id);

    template.querySelector('.card-title').innerHTML = poke.name
    template.querySelector('.card-image').setAttribute('src', poke.front_default)
    template.querySelector('.card-image').setAttribute('alt', poke.name)
    template.querySelector('.card-atac').innerHTML= poke.atac+""
    template.querySelector('.card-atac').setAttribute('style', "width:"+poke.atac*0.8+"%")
    template.querySelector('.card-def').innerHTML= poke.def+""
    template.querySelector('.card-def').setAttribute('style', "width:"+poke.def*0.8+"%")
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    
    view.appendChild(fragment)
}

/* 

export  function renderPoke2(pokemons) {
    const template = document.querySelector('#card-template').content
    const fragment = document.createDocumentFragment()

    pokemons.forEach(( poke ) => {
        template.querySelector('.card').setAttribute('id',poke.id);
        template.querySelector('.card').setAttribute('data-id',poke.id);

        //template.querySelector('a').setAttribute('href',    "?poke="+poke.id);
        template.querySelector('.card-title').innerHTML = poke.name
        template.querySelector('.card-image').setAttribute('src', poke.front_default)
        template.querySelector('.card-image').setAttribute('alt', poke.name)
        template.querySelector('.card-atac').innerHTML= poke.atac+""
        template.querySelector('.card-atac').setAttribute('style', "width:"+poke.atac*0.8+"%")
        template.querySelector('.card-def').innerHTML= poke.def+""
        template.querySelector('.card-def').setAttribute('style', "width:"+poke.def*0.8+"%")
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })

    view.appendChild(fragment)
} */


export async function showInfo(poke) {
    
    
    var pokemon =  await getPokemon({ keyword:poke });

   
    const template = document.querySelector('#card-info').content
    const fragment = document.createDocumentFragment()

    template.querySelector('.card').setAttribute('id',pokemon.id);
    template.querySelector('.card').setAttribute('data-id',pokemon.id);

    template.querySelector('.card-title').innerHTML = pokemon.name
    template.querySelector('.card-image').setAttribute('src', pokemon.front_default)
    template.querySelector('.card-image').setAttribute('alt', pokemon.name)

    template.querySelector('.card-image-back').setAttribute('src', pokemon.back_default)
    template.querySelector('.card-image-back').setAttribute('alt', pokemon.name)

    template.querySelector('.card-atac').innerHTML= pokemon.atac+""
    template.querySelector('.card-atac').setAttribute('style', "width:"+pokemon.atac*0.8+"%")
    template.querySelector('.card-def').innerHTML= pokemon.def+""
    template.querySelector('.card-def').setAttribute('style', "width:"+pokemon.def*0.8+"%")
 
    
    var tipus = template.querySelector('.card-type');
    tipus.innerHTML="";
    pokemon.types.forEach(function(type){
       
        var tip = document.createElement('div');
        
        // comentari: bon detall el de donar estils diferents segons el tipus
        switch(type.type.name){

            case 'normal': tip.innerHTML = "Normal";  tip.style.backgroundColor='burlywood';break;
            case 'fighting': tip.innerHTML = "Lluita";  tip.style.backgroundColor='brown';break;
            case 'flying': tip.innerHTML = "Volador";  tip.style.backgroundColor='cornflowerblue';break;
            case 'poison' : tip.innerHTML = "Verí";  tip.style.backgroundColor='purple';break;
            case 'ground': tip.innerHTML = "Terra";  tip.style.backgroundColor='peru';break;
            case 'rock': tip.innerHTML = "Roca";  tip.style.backgroundColor='moccasin';break;
            case 'bug': tip.innerHTML = "Escarbat";  tip.style.backgroundColor='lightslategray';break;
            case 'ghost': tip.innerHTML = "Fantasma";  tip.style.backgroundColor='lightgrey';break;
            case 'steel': tip.innerHTML = "Acer";  tip.style.backgroundColor='gainsboro';break;
            case 'fire': tip.innerHTML = "Foc";  tip.style.backgroundColor='coral';break;
            case 'water': tip.innerHTML = "Aigua";  tip.style.backgroundColor='royalblue';break;
            case 'grass': tip.innerHTML = "Herba";  tip.style.backgroundColor='lightgreen';break;
            case 'electric': tip.innerHTML = "Electric";  tip.style.backgroundColor='gold';break;
            case 'psychic': tip.innerHTML = "Psíquic";  tip.style.backgroundColor='goldenrod';break;
            case 'ice': tip.innerHTML = "Gel";  tip.style.backgroundColor='steelblue';break;
            case 'dragon': tip.innerHTML = "Drac";  tip.style.backgroundColor='plum';break;
            case 'dark': tip.innerHTML = "Fosc";  tip.style.backgroundColor='crimson';break;
            case 'fairy': tip.innerHTML = "Fada";  tip.style.backgroundColor='hotpink';break;
            case 'unknown': tip.innerHTML = "Desconegut";  tip.style.backgroundColor='red';break;
            case 'shadow': tip.innerHTML = "Sombra";  tip.style.backgroundColor='gray';break;
        }  
      
       
        tipus.appendChild(tip); 
      
        tipus.appendChild(document.createElement('br'));    

    });
   
    const clone = template.cloneNode(true)

    fragment.appendChild(clone);
   



   // modal.appendChild(fragment);


   /*  const fragment = document.createDocumentFragment();
    
    var pokemon =  await getPokemon({ keyword:poke });

   
    const titol = document.createElement('h1');
    titol.innerHTML = pokemon.name.toUpperCase();
    
    const imatgeFront = document.createElement('img');
    imatgeFront.setAttribute('src', pokemon.front_default);
    imatgeFront.alt = pokemon.name;

    const imatgeBack = document.createElement('img');
    imatgeBack.setAttribute('src', pokemon.back_default);
    imatgeBack.alt = pokemon.name;

    const ul = document.createElement('ul');
    pokemon.types.forEach(function(type){
        let li = document.createElement('li');
        li.innerHTML = type.type.name;
        ul.appendChild(li);

    });
  

    fragment.appendChild(titol);
    fragment.appendChild(imatgeFront);
    fragment.appendChild(imatgeBack);
    fragment.appendChild(ul);
 */
   
    modal.querySelector('.modal-content').appendChild(fragment) ; 

} 


export async function filtraPokemons(pokemons){
    var matchPokemons = []
    let textCerca = document.getElementById("searchInput").value;
    

    pokemons.forEach(function(poke) {
        if (poke.name.includes(textCerca)) {

            //obtenim l'id partint la url
            let id = poke.url.split("/").reverse()[1];
            matchPokemons.push(id); 
        }
        //amb els ids de pokemons que coincideicen, fem la segona crida
        return matchPokemons;
    }) 
}

  async function getPokemonList(){
    return await getPokemon({limit:151});
  }
   

  //PROVA
  Promise.resolve(loadProva(1)).then((value) => {
    console.log(value);
    // expected output: 123
  });
  
  function loadProva(num){
      return  getPokemon({ keyword : num });
  }


  async function getPokemonInfo(id){
    let poke =  await getPokemon(id);
    renderPoke(poke);
    return poke;
  }

  export async function backRenderer(){
      //var modal = document.getElementById("modal");
      var cards = document.getElementsByClassName("card");
      console.log(cards);

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
          modal.querySelector('.modal-content').innerHTML=""
          
          }
      }

  }



/**
 * comentari: el filtre estava plentejat per filtrar sobre el pokemons que ja s'han carregat, és a dir els que es mostren per patalla.
 * D'aquesta manera només cal recorrer-los i canviar la visibilitat display:block/none
 * Has plantejat una bona alternativa, fent la cerca de qualsevol Pokemon de la PokeAPI, bona feina!
 */
export async function cerca(){
    var matchPokemons = []
    let textCerca = document.getElementById("searchInput").value;
    var pokemons =  await getPokemonList() ;
    
    pokemons.forEach(function(poke){
            
        if (poke.name.includes(textCerca)) {
       
            //obtenim l'id partint la url
            let id = poke.url.split("/").reverse()[1];
            matchPokemons.push(id);
        }
    });

    matchPokemons.forEach(function(poke){
       
         
        //carreguem els resultats
        let c = getPokemonInfo({ keyword:poke });
       

  
    });

    

    backRenderer();
}

// Buscar el pokemon/s
export async function cerca2 () {

    var matchPokemons = []
    let textCerca = document.getElementById("searchInput").value;

    var pokemon =  getPokemonList() // await getPokemon({limit:151})
    .then(function(llistaSencera){
        //console.log(llistaSencera);
        llistaSencera.forEach(function(poke){
            
            if (poke.name.includes(textCerca)) {
                console.log(poke.name);
                //obtenim l'id partint la url
                let id = poke.url.split("/").reverse()[1];
                matchPokemons.push(id);
            }
        });
       
        //amb els ids de pokemons que coincideicen, fem la segona crida
        return matchPokemons;

    })
    .then(function(match){
        let pokemon;
        let pokemons = [];
        //per a cada id, crida a la api per a recuperar dades de pokemon
        match.forEach(function(poke){
            console.log(poke);

            pokemon =  getPokemonInfo({ keyword:poke });
            console.log(pokemon);
            pokemons.push(pokemon);
        });
      
        return(pokemons);
    })
    .then(resu => console.log(resu));



    /* // Cridem a la api 
    var pokemon =  await getPokemon({limit:151}).then(function(result){
            let textCerca = document.getElementById("searchInput").value;
        
            result.forEach(function(poke) {
                if (poke.name.includes(textCerca)) {

                    //obtenim l'id partint la url
                    let id = poke.url.split("/").reverse()[1];
                    matchPokemons.push(id); 
                }
                //amb els ids de pokemons que coincideicen, fem la segona crida
                return matchPokemons;
            }) 
        }).then(function(){
            console.log(matchPokemons);
            var pokemons = [];
            var pokemon;
            // console.log(search);
            matchPokemons.forEach(function(poke){
                console.log(poke);
                pokemon = getPokemon({ keyword:poke });
                console.log(pokemon);

                                
                    //pokemon = awaitgetPokemon({ keyword:poke });
                    //pokemons.push(pokemon);
            });
        }); */
    
   /* var pokemons = [];
            var pokemon;
           // console.log(search);
           matchPokemons.forEach(function(poke){
                               
                    pokemon = awaitgetPokemon({ keyword:poke });
                    pokemons.push(pokemon);
            });
            
        
            return pokemons; */

 //eliminem pokemons carregats random
 document.getElementById('view').innerHTML = "";

 //posem els que casen
 //console.log(matchPokemons);
 //var searchPokemons = await findPoke(matchPokemons);
 //renderPoke(searchPokemons);


}


