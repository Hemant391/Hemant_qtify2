import {Chip ,Tooltip} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Card.module.css';

function Card({data,type}){
    const getCard =(type)=>{
        switch(type){
            case "album" :{
                const {image, follows, title, slug,songs} = data;
            return (
                <Tooltip tittle ={`${songs.length} songs`}  placement='top' arrow >
                     <Link to ={`album/${slug}`}>

                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="card_image" loading='lazy' />
                            <div className={styles.banner}>
                                <Chip label ={`${follows} Follows`} size ='small' className={styles.chip} />
                            </div>
                        </div>
                        <div className={styles.title}>
                            <p>{title}</p>
                        </div>
                    </div>
                    </Link>
                </Tooltip>
            );
            }
            case 'song' :{
                const {image,likes,title}=data;
                return(
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="song_image" loading='lazy' />
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.title}>
                            <p>{title}</p>
                        </div>
                    </div>
                );
            }
            default :return (<><div></div></>)
        }
    };
    return getCard(type)
}


export default Card;