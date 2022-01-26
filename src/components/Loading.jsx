import style from "./Loading.module.css"
export function Loading() {
    return(
        <section className={style.contentLoader}>
            <i className='bx bx-loader-circle' ></i>
        </section> 
    )
}