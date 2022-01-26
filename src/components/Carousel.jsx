import style from "./Carousel.module.css"
import {get} from "../utils/HttpClient"
import { useEffect, useState } from "react";
import { CardsCarousel } from "./CardsCarrousel";
import { Loading } from "./Loading";
import { useQuery } from "../hooks/useQuey";

export function Carousel() {
    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(true);   
    
    
    const query = useQuery();
    const search = query.get("search"); 
    

    useEffect(()=>{
        setIsLoading(true);
        const searchURl = search 
        ? "/search/movie?query=" + search
        : "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2021-01-22";
        get(searchURl).then((data) =>{
            setMovies(data.results);
            setIsLoading(false)
        });
    }, [search]);
    
    if (isLoading){
        return <Loading></Loading>;
    }
    return(
        
        <div className={style.divContainer}>
            <ul className={style.CardMovieContainer}> 
            {movies.map((movie) => <CardsCarousel key={movie.id} movie={movie}></CardsCarousel>)}
            </ul>
        </div>
    )
}
