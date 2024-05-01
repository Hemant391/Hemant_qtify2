import Logo from "../Logo/Logo"
import Seachbar from "../search/Search";
import Button from '../button/Button';
import style from './Navbar.module.css'
import {Link} from 'react-router-dom'

export function Navbar(){
    return(
        <>
        <div>
        <nav className={style.navbar}>
            <Link to="/">
            <Logo />

            </Link>
            <Seachbar placeholder="Search a song of your choice"/>
            <Button prop='Give Feedback' ></Button>

        </nav>
        </div>
       
        </>
    )
}