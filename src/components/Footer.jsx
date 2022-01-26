
import styles from "./Footer.module.css"
export function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.gridFooter}>
                <ul className={styles.ul}>
                    <li>Home</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <ul className={styles.ul}>
                    <li>Movies</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <ul className={styles.ul}>
                    <li>Shows</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <ul className={styles.listSocial}>
                    <li className={styles.listSocialLi}>
                    social networks
                    </li>
                    <div>
                    <a href="https://www.facebook.com/ruzondavidj">
                    <li>
                        <i className='bx bxl-facebook'></i>
                    </li>
                    </a>
                    <a href="https://www.instagram.com/jefferson_ruzon/">
                    <li>
                        
                            <i className='bx bxl-instagram' ></i>
                        
                    </li>
                    </a>
                    <a href="https://twitter.com/jefferson_ruzo">
                    <li>
                        
                            <i className='bx bxl-twitter' ></i>
                        
                    </li>
                    </a>
                    <a href="https://github.com/jeffersonruzon">
                    <li>
                       
                            <i className='bx bxl-github' ></i>
                        
                    </li>
                    </a>
                    </div>
                </ul>
            </div>
        </footer>
    )
}
