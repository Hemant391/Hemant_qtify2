// import styles from "./HomePage.module"
// import React  from 'react';
// import Section from '../../components/section/Section';
// import Hero from '../../components/Hero/Hero';
// import { fetchFilters } from "../../api/api";


// export default function HomePage() {
//     const {data}=useOutletContext();
//     const {newAlbums,topAlbums,songs } =data;
//     return(
//         <>
//         <Hero />
//         <div className={styles.wrapper}>
//             <Section title ="Top Albums" data ={topAlbums} type='album' />
//             <Section title ="Top Albums" data ={newAlbums} type='album' />
//             <Section title ="Songs" data ={songs} filterSource={fetchFilters} type='song' />

//         </div>
//         </>
//     )
// }