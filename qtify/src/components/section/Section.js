import {CircularProgress} from '@mui/material';
import React,{useEffect,useState} from 'react';
import Card from '../card/Card';
import Carousel from '../carousel/Carousel';
import Filters from '../filters/Filters';
import styles from './Section.module.css';

export default function Section ({title,data,filterSource,type}){
    const [filters,setFilters]=useState([{key:'all',label :'All'}])
    const [selectedFilterIndex,setselectedFilterIndex]=useState(0)
    const [carouselToggle,setcarouselToggle]=useState(true)

    const handleToggle=()=>{
        setcarouselToggle((prevstate)=>!prevstate)
    };
    useEffect(()=>{
        if (filterSource){
            filterSource().then((res)=>{
                const {data}=res;
                setFilters([...filters,...data]);
            })
        }
    })

    const showFilters =filters.length;
    const cardsRender= data.filter((card) =>
        showFilters && selectedFilterIndex !==0? card.genre.key === filters[selectedFilterIndex].key :card
    );
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!carouselToggle? 'Collapse All': "show All"}
                </h4>
            </div>
            {showFilters && (
                <div className={styles.filtersWrapper}>
                    <Filters filters={filters} selectedFilterIndex={selectedFilterIndex} setselectedFilterIndex={setselectedFilterIndex} />

                </div>
            )}
            {data.length===0 ?(<CircularProgress />) :(
                <div className={styles.cardsWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {cardsRender.map((ele)=>(
                        <Card data={ele} type={type} />
                    ))}


                        </div>
            ) : (
                <Carousel data={cardsRender} renderComponent={(data)=> <Card data={data} type ={type} />} 
                />
            )}
            </div>
    )}
         </div>
    )



}
