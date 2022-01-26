import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import { Loading } from "../components/Loading";
import { get } from "../utils/HttpClient";
import style from "./MoviesInfo.module.css"

export function MovieInfo () {
    const { movieId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId).then(data => {
            setMovie(data);
            setIsLoading(false)
        })
    }, [movieId]);

    if (isLoading){
        return(
            <Loading></Loading>
        );
    }


    const imgUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path: null;
    const imgUrlB = movie.backdrop_path ? "https://image.tmdb.org/t/p/w500" + movie.backdrop_path: null;

return(
      
    <div className={style.detailsContainer}>
        <img className={style.img} src={imgUrl} alt={movie.title} />
        <div className={style.imgBackdropContainer}><img className={style.imgBackdrop} src={imgUrlB} alt={movie.title} /></div>
        <div className={style.info}>
       
        <p className={style.p}>{movie.title}</p><br />
            <div className={style.data}>
            
            <p>{movie.release_date}</p>
            <p>{movie.genres.map(genres => genres.name).join(",   ")}</p> 
            </div>
            
            
            <div className={style.description}>
                <p>{movie.tagline}</p>
                <p>
                {movie.overview}
                </p>
                
            </div>
        </div>
        
    </div>
  );  
}