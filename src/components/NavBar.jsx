import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"
import logo from "../img/Logo.png"
import { useState } from "react";


export function NavBar(){
    const [enabled, setEnabled] = useState(true);
    const NavBar = enabled ? style.navDeactive:  style.nav  ;
    const Btn = enabled ? style.btnSidebarDeactive : style.btnSidebar 
    return(
        <nav className={NavBar}>
            <div className={Btn} onClick={ () => setEnabled(!enabled)}>
                <span className={style.span}></span>
                <span className={style.span}></span>
                <span className={style.span}></span>
            </div>
            
            <div className={style.logoContainer}>
                <NavLink to="/"> <img src={logo} alt="Logo app-movies" /> </NavLink>
            </div>
            
            
            <div className={style.ulContainer}>
            <ul className={style.ul_nav}>
                <li><i className='bx bxs-home'></i><NavLink to="/">Home</NavLink></li>
                <li><i className='bx bxs-camera-movie'></i><NavLink to="/movies">Movies</NavLink></li>
                <li><i className='bx bxs-slideshow' ></i><NavLink to="/shows">Shows</NavLink></li>
                <li><i className='bx bx-layer' ></i><NavLink to="/more">More</NavLink></li>
            </ul>
            </div>
            <div className={style.ulContainer}>
                <ul className={style.ul_nav}>
                    <li className={style.li_menu}><i className='bx bxs-movie-play' ></i>Genres   <i className={style.icon + " bx bx-chevron-down"}></i>
                        <div className={style.content_menu}>
                            <ul>
                                <li>Fear</li>
                                <li>Romance</li>
                                <li>Science fiction</li>
                                <li>See more</li>
                            </ul>
                        </div>
                    </li>
                    <li className={style.li_menu}><i className='bx bxs-spreadsheet' ></i>Premieres   <i className={style.icon + " bx bx-chevron-down"}></i>
                        <div className={style.content_menu}>
                            <ul>
                                <li>2022</li>
                                <li>2021</li>
                                <li>2020</li>
                                <li>See more</li>
                            </ul>
                        </div>
                    </li>
                    <li className={style.li_menu}><i className='bx bxs-video-recording' ></i>Recommended   <i className={style.icon + " bx bx-chevron-down"}></i>
                        <div className={style.content_menu}>
                            <ul>
                                <li>Most viewed</li>
                                <li>Best critic</li>
                                <li>See more</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
} 