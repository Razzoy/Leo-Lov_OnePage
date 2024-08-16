import style from '../Card/Card.module.scss'
export function Card(props) {
    return (
        <>
            <div className={style.cardContainer}>
                {props.children}
            </div>
        </>
    )
}