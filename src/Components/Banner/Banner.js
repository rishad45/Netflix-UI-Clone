import './Banner.css'
import { useEffect,useState } from 'react';
// importing libraries
import axios from '../../Constants/axios'
// importing constants
import {TMDBApiKey,imageUrl} from '../../Constants/constants' 
function Banner() {
    const [movie, setMovie] = useState() 
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${TMDBApiKey}&language=en-US`).then((res) => {
            console.log(res.data.results);
            setMovie(res.data.results[Math.floor(Math.random() * (res.data.results.length + 1) ) ]) 
        })
    },[])
    return (
        <div className='banner'
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : 'https://wallpaperaccess.com/full/2703652.png'})`}}
        >
            <div className='content'>
                <h1 className="title">{movie ? movie.name ? movie.name : movie.title : ''}</h1>  
                <div className="bannerButtons">
                    <button className="bannerButt">Play</button>
                    <button className="bannerButt">My List</button>
                </div>
                <div className="desc">
                    <h3 className="descriptionHeader">Watch Now</h3>
                    <p className='descriptionText'>{movie ? movie.overview : ''}</p> 
                </div>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner