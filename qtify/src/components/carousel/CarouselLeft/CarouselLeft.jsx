import { useEffect, useState } from "react";
import {useSwiper,useSwiperSlide} from 'swiper/react';
import styles from './CarouselLeft.module.css'
import { ReactComponent as LeftArrow } from '../../../assets/LeftArrow.svg'

export default function CarouselLeft(){
    const swiper =useSwiper();
    const [isBeginning,setIsBeginning]=useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on('slideChange',function (){
            setIsBeginning(swiper.isBeginning);
        });
    }, [swiper.isBeginning]);

    return (
        <div className={styles.leftNavigate}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    );
}