import React from 'react';
import SearchIcon from '../../assets/searchicon.svg';
import style from '../search/search.module.css';

function SearchBar({placeholder}){
    return(
        <>
        <div className={style.mainbox}>
            <div>
            <input type="text" className={style.search} placeholder={placeholder} />
            </div>
            <div>
                <button className={style.searchbutton} type='submit'>
                    <img  src={'../../assets/searchicon.svg'} width={212} alt="" />
                    {/* <SearchIcon /> */}
                </button>
            </div>
        </div>
        </>
    )
}
export default SearchBar;
