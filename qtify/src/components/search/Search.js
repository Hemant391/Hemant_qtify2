import React from 'react';
import SearchIcon from '../../assets/searchicon.svg';
import style from '../search/search.module.css';

export default function SearchBar({placeholder}){
    return(
        <>
        <div className={style.mainbox}>
            <div>
            <input type="text" className={style.search} placeholder={placeholder} />
            </div>
            <div>
                <button className={style.searchbutton} type='submit'>
                    <img  src={SearchIcon} alt="search" />
                 
                </button>
            </div>
        </div>
        </>
    )
}
