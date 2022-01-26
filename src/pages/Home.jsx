
import {HomeGrid} from '../components/HomeGrid'
import styles from  './Home.module.css'

export function Home() {
    return(
        <div>            
            
            <HomeGrid></HomeGrid>
            <p className={styles.endPage}>This page is created only as a web development practice using reactJS and an API from an external server from Themoviedb.</p>
        </div>
    )
}