import style from "./Search.module.css"
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useQuery } from "../hooks/useQuey";
import { useEffect } from "react";
export function Search() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const query = useQuery();
    const search =  query.get("search"); 
    
    useEffect(() => {
        setSearchText(search || "");
    }, [search]);



    const SearchSubmit = (e) => {
        e.preventDefault();
        navigate( location.pathname + "?search=" + searchText )
        

    }
    
    return (
        <form className={style.searchContainer} onSubmit={SearchSubmit}>
            <div className={style.search}>
                <input type="text" placeholder="Search....." value={searchText} 
                onChange={(e) =>{
                    const value = e.target.value;
                    setSearchText(value);
                    navigate(location.pathname + "?search=" + value); }}/>
                <button type="submit"><i className='bx bx-search' ></i></button>
            </div>
        </form>
    )
}
