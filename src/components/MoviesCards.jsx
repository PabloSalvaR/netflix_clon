import React, {useState, useEffect} from 'react'

const API_IMG = "https://image.tmdb.org/t/p/w500"
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=ff156831e11a60cbd82d7ce3eabd2218"

const MoviesCards = ( title, overview) => {

const [movies, setMovies] = useState([])
    




    useEffect(() => {
        fetch(API_URL)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            setMovies(data.results);
        })
    }, [])

    return (
    <div className="movie">
    {movies.map((movie) => (
        <div key={movie.id}>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                    <img src={API_IMG+movie.poster_path} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <div className="card-actions">
                    <button className="btn btn-error bg-red-700 text-white ">Ver Ahora</button>
                    </div>
                </div>
            </div>
        </div>
    ))}

    </div>
)
}

export default MoviesCards