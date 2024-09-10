import style from '../Card/Card.module.scss'
export function Card({children, theme}) {
    return (
        <>
            <div className={theme ? style.cardDark : style.cardContainer}>
                {children}
            </div>
        </>
    )
}