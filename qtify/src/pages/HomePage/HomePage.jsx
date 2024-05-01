import styles from "./HomePage.module.css"
import React  from 'react';
import Section from '../../components/section/Section';
import Hero from '../../components/Hero/Hero';
import { fetchFilters } from "../../api/api";
import { useOutletContext } from "react-router-dom";




export default function HomePage() {
    const {data}=useOutletContext();
    const {topAlbums,newAlbums,songs } =data;
    return(
        <>
        <Hero />
        <div className={styles.wrapper}>
            <Section title ="Top Albums" data ={topAlbums} type='album' />
            <Section title ="New Albums" data ={newAlbums} type='album' />
            <Section title ="Songs" data ={songs} filterSource={fetchFilters} type='song' />

        </div>
        </>
    )
}