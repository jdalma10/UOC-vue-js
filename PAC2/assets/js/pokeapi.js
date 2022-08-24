


export default function getPokemon({ keyword = '' } ) {
	
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${keyword}?limit=10&offset=0`
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
            console.log(response)
			const { id } = response
			const { sprites } = response
			//console.log(sprites)
			const { name } = response
			//console.log(name)
			const {front_default} = sprites
			//console.log(front_default)
			const {stats} = response
			//console.log(stats)
			const atac = stats[1].base_stat
			const def = stats[2].base_stat
	
			return {id, name, front_default, atac, def}
		

		
		})
}
