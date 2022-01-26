import { NavLink } from "react-router-dom"
import styles from "./CardsCarousel.module.css"

export function CardsCarousel({movie}) {
    const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
    
    return(
        <li className={styles.CardCarousel}>
            <NavLink to={"/movies/" + movie.id}>
                <div className={styles.div}>
                    <img className={styles.CardImg}src={imgUrl} alt={movie.title} />
                    <span className={styles.title}>{movie.title}</span>
                </div>
            </NavLink>
        </li>
    );
}