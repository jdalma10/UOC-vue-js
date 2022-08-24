import getGifs from '../service/getGifs.js'

const submit = document.querySelector('.search-submit')
const input = document.querySelector('.search-input')
const view = document.querySelector('#view')
const gifs = await getGifs()

renderGifs(gifs)

submit.addEventListener('click', async function (e) {
	e.preventDefault()
	const keyword = input.value
	if (keyword) {
		const res = await getGifs({ keyword })
		if (res) {
			view.innerHTML = ''
			input.value = ''
			renderGifs(res)
		}
	}
})

function renderGifs(gifs) {
	const template = document.querySelector('#card-template').content
	const fragment = document.createDocumentFragment()

	gifs.forEach((gif) => {
		template.querySelector('.card-title').innerHTML = gif.title
		template.querySelector('.card-image').setAttribute('src', gif.url)
		template.querySelector('.card-image').setAttribute('alt', gif.title)
		const clone = template.cloneNode(true)
		fragment.appendChild(clone)
	})

	view.appendChild(fragment)
}
