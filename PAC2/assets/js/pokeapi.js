

export default function getPokemon({ keyword = '',limit = 10} ) {

	
	
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${keyword}?limit=${limit}&offset=0`
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
            //console.log(keyword)
			
			// Si tenim un keyword, busquem un en concret
			if(keyword){  

				const { id } = response
				const { name } = response
				const { sprites } = response
				const {front_default} = sprites
				const {stats} = response
				const atac = stats[1].base_stat
				const def = stats[2].base_stat
				//console.log(name)
				//console.log(sprites)
				//console.log(front_default)
				//console.log(stats)

				return {id, name, front_default, atac, def}

			// Sino, es que volem obtenir tots els noms
			}else{

				const { results } = response
				//console.log(results)
				return results
			}		
		})
}


