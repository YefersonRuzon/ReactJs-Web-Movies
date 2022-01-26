import {get} from "../utils/HttpClient"
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCards"
import styles from "./HomeGrid.module.css"
import { Loading } from "./Loading";
import { useQuery } from "../hooks/useQuey";
import { Carousel } from "./Carousel";

export function HomeGrid () {
    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(true);   
    
    
    const query = useQuery();
    const search = query.get("search"); 
    

    useEffect(()=>{
        setIsLoading(true);
        const searchURl = search 
        ? "/search/movie?query=" + search
        : "/discover/movie";
        get(searchURl).then((data) =>{
            setMovies(data.results);
            setIsLoading(false)
        });
        
    }, [search]);
    
    if (isLoading){
        return <Loading></Loading>;
    }
    return(
        
        <div className={styles.divContainer}>
            <Carousel></Carousel>
            <h3 className={styles.title}>Recommended</h3>
            <p className={styles.SubTitle}>There will always be more to enjoy!</p>
            <ul className={styles.MoviesContainer}> 
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
            </ul>
        </div>
    )
}