import {get} from "../utils/HttpClient"
import { useEffect, useState } from "react";
import { TvCard } from "./TvCard"
import styles from "./PageMovies.module.css"
import { Loading } from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
export function PageTv ({ search }) {
    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(true);   
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
   

    useEffect(()=>{
        setIsLoading(true);
        const searchURl = search 
        ? "/search/tv?query=" + search +  "&page=" + page
        : "/discover/tv?page=" + page;
        get(searchURl).then((data) =>{
            setMovies(prevMovies => prevMovies.concat(data.results) );
            setHasMore(data.page < data.total_pages)
            setIsLoading(false)
        });
    }, [search, page]);
    
    
    return(
        
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} loader={<Loading></Loading>} next={()=> (setPage((prevPage) => prevPage +1))} className={styles.divContainer}>
            
            
            <ul className={styles.MoviesContainer}> 
            {movies.map((movie) => <TvCard key={movie.id} movie={movie}></TvCard>)}
            </ul>
        </InfiniteScroll>
    )
}