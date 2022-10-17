import React from 'react'
import BannerStyle from './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className="title">abcd</h1>
                <div className="bannerButtons">
                    <button className="bannerButt">Play</button>
                    <button className="bannerButt">My List</button>
                </div>
                <div className="desc">
                    <h3 className="descriptionHeader">What is Lorem Ipsum?</h3>
                    <p className='descriptionText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>  
            <div className="fade"></div>
        </div>
    )
}

export default Banner