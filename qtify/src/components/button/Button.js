import React from 'react'
import style from './button.module.css'


 function Button ({prop}){
    return(
        <button className={style.button} >{prop}</button>
    )
}
export default Button;