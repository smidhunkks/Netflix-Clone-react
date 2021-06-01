import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className="banner">
            <div className='content'>
                <h1 className='title'>Movie</h1>
                <div className='banner-buttons'>
                    <button className='button'>play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi odio eligendi doloremque amet dolorum quo culpa .</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
