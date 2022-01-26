import LogoTopBar from "../img/LogoTopBar.png"
import style from "./TopBar.module.css"
import { NavLink } from "react-router-dom"
export function TopBar() {
    
    return(
        <nav className={style.topBar}>
            <div className={style.imgContainer}>
            <NavLink to="/">
            <img className={style.imgTopBar} src={LogoTopBar} alt="Img Logo web movies " />
            </NavLink>
            </div>
            
        </nav>
    )
}