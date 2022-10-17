export const baseUrlApiTMDB = 'https://api.themoviedb.org/3'
export const TMDBApiKey = 'a305a106d90e2fa90e3378b5b15b09db'
export const imageUrl = 'https://image.tmdb.org/t/p/original'

// categories urls 
export const originalsUrl = `/discover/tv?api_key=${TMDBApiKey}&with_networks=213`
export const actionsUrl = `/discover/movie?api_key=${TMDBApiKey}&with_genres=28`
export const trendingsUrl = `/trending/all/week?api_key=${TMDBApiKey}&language=en-US`
export const comediesUrl = `/discover/movie?api_key=${TMDBApiKey}&with_genres=35`
export const romanceUrl = `/discover/movie?api_key=${TMDBApiKey}&with_genres=10749`
export const DocumentariesUrl = `/discover/movie?api_key=${TMDBApiKey}&with_genres=99`
