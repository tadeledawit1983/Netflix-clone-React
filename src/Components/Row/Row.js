import React, { useState, useEffect } from 'react'
import axios from '../axios';
import './row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original"

function Row({ fechUrl, title, isLarge }) {

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        axios.get(fechUrl).then(res => {
            setMovies(res.data.results)
        })
    }, [fechUrl])

    function handleMovieClick(movie) {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie.original_name)
                .then((url) => {
                    const usp = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(usp.get("v"))

                })
                .catch(err => err)
        }
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    }

    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className='row_poster'>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleMovieClick(movie)}
                        className={isLarge ? 'row_large_poster' : 'poster_img'}
                        src={`${base_url}${isLarge ? movie?.poster_path : movie?.backdrop_path}`} alt={movie?.name} />
                ))}
            </div>
            <div style={{ padding: '40px' }}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
    )
}

export default Row
