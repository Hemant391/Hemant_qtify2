import { useEffect, useState } from "react";
import {useSwiper,useSwiperSlide} from 'swiper/react';
import styles from './CarouselRight.module.css'
import { ReactComponent as RightArrow} from '../../../assets/RightArrow.svg'




export default function CarouselLeft(){
    const swiper =useSwiper();
    const [isEnd,setIsEnd]=useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on('slideChange',function (){
            setIsEnd(swiper.isEnd);
        });
    },[swiper.isEnd])

    return (
        <div className={styles.rightNavigate}>
            {!isEnd && <RightArrow onClick={()=> swiper.slideNext()} />}
        </div>
    );
}