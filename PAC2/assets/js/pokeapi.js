

export default function getPokemon({ keyword = '',limit = 10} ) {

    //const apiURL = `https://pokeapi.co/api/v2/pokemon/${keyword}?limit=${limit}&offset=0`
	const apiURL = `https://pokeapi.co/api/v2/pokemon/${keyword}`

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
				const {back_default} = sprites
				const {stats} = response
				const atac = stats[1].base_stat
				const def = stats[2].base_stat
				const {types} = response
				

				return {id, name, front_default, back_default, atac, def, types}

			// Sino, es que volem obtenir tots els noms
			}else{

				const { results } = response
				return results
			}		
		})
}


