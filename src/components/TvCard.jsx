import { NavLink } from "react-router-dom"
import styles from "./MovieCards.module.css"

export function TvCard({movie}) {
    const imgUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : null;
    return(
        <li className={styles.MovieCard}>
            <NavLink to={"/shows/" + movie.id}>
                <div>
                    <img className={styles.MovieImg} width={200} height={295} src={imgUrl} alt={movie.title} />
                    <i className='bx bx-play-circle'></i>
                    <div  className={styles.vote}>
                        
                            <p>{movie.vote_average}</p>
                        
                        
                    </div>
                </div>
            </NavLink>
        </li>
    );
}