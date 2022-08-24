import { API_KEY } from './config.js'

export default function getGifs({ keyword = 'pokemon' } = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			const { data } = response
			const gifs = data.map((image) => {
				const { images, title, id } = image
				const { url } = image.images.downsized_medium
				return { title, id, url }
			})
			return gifs
		})
}
