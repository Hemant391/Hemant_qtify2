import React from 'react';
import logoimage from "../../assets/logo.png"
import styles from '../Logo/Logo.module.css'

 function Logo(){
    return(
        <>
        <div className={styles.logo}>

         <img src={logoimage} alt='logo' width={67} />
        </div>
        </>
    )
}
export default Logo;