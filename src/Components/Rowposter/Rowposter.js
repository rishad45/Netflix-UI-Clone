import React, { useEffect, useState } from 'react'
// import ajax
import axios from '../../Constants/axios'
import { TMDBApiKey, baseUrlApiTMDB, imageUrl} from '../../Constants/constants'
import './Rowposter.css'
function RowPoster(props) {
    const [originals, setOriginals] = useState([])
    useEffect(() => {
        axios.get(props.url).then((res) => {
            console.log("originals", res.data.results);
            setOriginals(res.data.results) 
        })
    }, [])
    return (
        <div className='row'>
            <h4 className='catTitle'>{props.title}</h4>
            <div className="posters"> 
                {
                    originals.map((i) => <img src={`${imageUrl+i.backdrop_path}`} alt="Card" className={props.isSmall ? 'smallPoster' : 'poster'} />) 
                }
            </div>
        </div>
    )
}

export default RowPoster