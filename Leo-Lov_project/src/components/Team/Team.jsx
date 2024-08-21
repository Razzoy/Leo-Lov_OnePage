import style from '../Team/Team.module.scss'
export function Team(props) {
    return (
        <>
            <div className={style.teamContainer}>

                <div className={style.teamCards}>
                    {props.children}
                </div>
            </div>
        </>
    )
}