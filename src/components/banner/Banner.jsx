import React, { useEffect, useState } from 'react'

import './Banner.css'
import { API_KEY,Img_URL } from '../../constants/constants'
import axios from '../../axios'
function Banner() {
    const [state, setstate] = useState()
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((obj) => {
            const x=obj.data.results[Math.floor(Math.random()*obj.data.results.length)]
            setstate(x)
            
            console.log(x)
        })

    }, [])
    return (
        <div className="banner" style={{backgroundImage:`url(${state?Img_URL+state.backdrop_path:""})`}}>
            <div className='content'>
                <h1 className='title'>{state?state.title?state.title:state.original_name:""}</h1>
                <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{state?state.overview:""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
