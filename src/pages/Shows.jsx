import { PageTv } from "../components/PageTv";
import { useQuery } from "../hooks/useQuey";
import { useDebounce } from "../hooks/useDebounce";

export function Shows() {
    const query = useQuery();
    const search = query.get("search"); 
    
    const debounceSearch = useDebounce(search, 500)
    return (
        <div>
           <PageTv key={debounceSearch} search={debounceSearch}></PageTv> 
        </div>
    )
}