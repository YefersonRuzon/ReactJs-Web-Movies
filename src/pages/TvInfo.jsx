import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import { Loading } from "../components/Loading";
import { get } from "../utils/HttpClient";
import style from "./MoviesInfo.module.css"


export function TvInfo () {
    const { tvId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [tv, setTv] = useState(null);
    
    useEffect(() => {
        setIsLoading(true);

        get("/tv/" + tvId).then(data => {
            setTv(data);
            setIsLoading(false)
        })
    }, [tvId]);

    if (isLoading){
        return(
            <Loading></Loading>
        );
    }

    

    const imgUrl = tv.poster_path ? "https://image.tmdb.org/t/p/w500" + tv.poster_path: null;
    const imgUrlB = tv.backdrop_path ? "https://image.tmdb.org/t/p/w500" + tv.backdrop_path: null

return(
      
    
    <div className={style.detailsContainer}>
    <img className={style.img} src={imgUrl} alt={tv.title} />
    <img className={style.imgBackdrop} src={imgUrlB} alt={tv.title} />
    <div className={style.info}>
       
    <p className={style.p}>{tv.name}</p><br />
            <div className={style.data}>
            
            <p>{tv.last_air_date}</p>
            <p>{tv.genres.map(genres => genres.name).join(",   ")}</p> 
            </div>
            
            
            <div className={style.description}>
                <p>{tv.tagline}</p>
                <p>
                {tv.overview}
                </p>
                
            </div>

    </div>
    </div>
  );  
}