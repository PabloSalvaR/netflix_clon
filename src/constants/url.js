const baseUrl = "https://api.themoviedb.org/3"

const apiKey = "c17edae86191fcd501e1b15ab1064552"

const requests = {
    discoverTv : `/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1`
}

const imgBaseUrl = 'https://image.tmdb.org/t/p'



export {
    baseUrl,
    requests,
    imgBaseUrl
}