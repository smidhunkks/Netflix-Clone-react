import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY, Img_URL } from '../../constants/constants'
import axios from '../../axios'

import YouTube from 'react-youtube'


function RowPost(props) {
    const [movie, setmovie] = useState([])
    const [vid_id, setvid_id] = useState("")
    useEffect(() => {
        axios.get(props.url).then(obj => {
            //console.log(obj.data);
            setmovie(obj.data.results)
        })

    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handlemovie = (id) => {

        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(res => {
            //console.log(res.data.results[0].key)
            if (res.data.results.length !== 0) {
                console.log(res.data.results);
                setvid_id(res.data.results[0].key)
            }
            else {
                console.log("Array empty");
            }

        })

    }
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj, index) =>
                    <img key={index} onClick={() => handlemovie(obj.id)} className={props.isSmall ? "small-poster" : "poster"} src={`${Img_URL + obj.backdrop_path}`} alt="Poster" />

                )}



            </div>
            {
                vid_id && <YouTube opts={opts} videoId={vid_id} _onReady={(event)=>{event.target.pauseVideo();}} />
            }

        </div>
    )
}

export default RowPost
