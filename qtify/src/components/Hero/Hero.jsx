import React from 'react';
import style from './Hero.module.css'
import image from '../../assets/heroimage.png'

function Hero(){
    return(
        <>
        <div className={style.hero}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
            <img src={image} alt="Hero_image" width={212} />
            </div>
        </div>
        </>
    )
};

export default Hero;