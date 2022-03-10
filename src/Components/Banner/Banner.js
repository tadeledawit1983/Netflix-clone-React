import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../requests'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import './Banner.css'


const Banner = () => {
    const base_url = "https://image.tmdb.org/t/p/original/" //https://image.tmdb.org/t/p/ 
    const [movie, setMovie] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        const data = async () => {
            const res = await axios.get(requests.netflexOriginal)
            setMovie(res.data.results[
                Math.floor(Math.random() * res.data.results.length)
            ])
            return res
        }
        data()
    }, [])

    const styles = {
        backgroundImage: `url('${base_url}${movie.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    function trancate(str, num) {
        return str?.length > num ? str.substr(0, num - 1) + '...' : str
    }
    function handleMovieClick(movie) {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
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
        <div>
            <div className="banner" style={styles}>
                <div className="banner_title">
                    <h2>{movie.title || movie.name || movie.original_name}</h2>
                    <div className="btn">
                        <button onClick={() => handleMovieClick(movie)} className="btn_banner">Play</button>
                        <button className="btn_banner">My List</button>
                    </div>
                    <p className="banner_description">{trancate(movie.overview, 150)}</p>
                </div>

                <div className="shadow"></div>
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Banner