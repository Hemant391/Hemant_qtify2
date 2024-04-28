import React from 'react';
import style from './Hero.module.css'
import image from '../../assets/hero_image.png'

function Hero(){
    return(
        <>
        <div className={style.hero}>
            <img src={image} alt="Hero_image" width={212} />
        </div>
        </>
    )
};

export default Hero;