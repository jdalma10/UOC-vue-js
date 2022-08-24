
export default function renderPoke(pokemons) {
	const template = document.querySelector('#card-template').content
	const fragment = document.createDocumentFragment()

	pokemons.forEach(( poke ) => {
        template.querySelector('a').setAttribute('href',    "?poke="+poke.id);
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