import { PageMovies } from "../components/PageMovies";
import { useQuery } from "../hooks/useQuey";
import { useDebounce } from "../hooks/useDebounce";

export function Movies() {
    const query = useQuery();
    const search = query.get("search"); 
    
    const debounceSearch = useDebounce(search, 500)
    return (
        <div>
           <PageMovies key={debounceSearch} search={debounceSearch}></PageMovies> 
        </div>
    )
}
