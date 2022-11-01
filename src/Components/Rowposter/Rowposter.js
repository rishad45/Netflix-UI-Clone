import React, { useEffect, useState } from 'react'
// import axios
import axios from '../../Constants/axios'
// importing constants
import { TMDBApiKey, baseUrlApiTMDB, imageUrl } from '../../Constants/constants'
// importing css
import './Rowposter.css'
// importing packages
import Youtube from 'react-youtube'
// the function
function RowPoster(props) {

    // state for movies
    const [movies, setMovies] = useState([])

    // state for storing youtube key
    const [utubeKey, setutubeKey] = useState("")

    // state for mouse hovering
    const [isHovering, setIsHovering] = useState('')

    useEffect(() => {
        axios.get(props.url).then((res) => {
            console.log("originals", res.data.results);
            setMovies(res.data.results) 
        })
        console.log("hello"); 
    }, [])

    // function to find utube video id
    const movieTrailers = (videoId) => {
        console.log(videoId);
        axios.get(`/movie/${videoId}/videos?api_key=${TMDBApiKey}&language=en-US`).then((res) => {
            console.log(res.data);
            if (res.data.results.length !== 0) {
                setutubeKey(res.data.results[0].key)
            } else {
                console.log("no data");
            }

        })
    }

    // function for Hovering
    const handleMouseOver = (id) => { 
        console.log(id);
        setIsHovering(id)  
    }

    // function for mouse out
    const handleMouseOut = () => {
        setIsHovering('') 
    }

    // react-youtube options
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    return (
        <div className='row'>
            <h3 className='catTitle'>{props.title}</h3>
            <div className="posters">
                {
                    movies.map((i) => {
                        return <div className='imageBox' key={i.id}>
                            <img onMouseOver={()=>handleMouseOver(i.id)} onMouseOut={handleMouseOut} onClick={() => { movieTrailers(i.id) }} src={`${imageUrl + i.backdrop_path}`} alt="Card" className={props.isSmall ? 'smallPoster' : 'poster'} />
                            {isHovering===i.id && <div className='tag'>
                                <p className='movieName'>{i.title ? i.title : i.name}</p> 
                                <p>{i.vote_average}</p>
                            </div>
                            }
                        </div>
                    })
                }
            </div>
            {utubeKey && <Youtube videoId={utubeKey} opts={opts} />}
        </div>

    )
}

export default RowPoster