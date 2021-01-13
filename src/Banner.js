import { buildQueries } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './Requests'
import "./Banner.css"

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData();
    }, [])

    return (
        <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            ackgroundPosition: "center center",
        }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_derscription'>{movie?.overview}</h1>

            </div>
        </header>
    )
}

export default Banner
