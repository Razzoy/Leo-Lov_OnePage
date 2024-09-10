import style from '../Team/Team.module.scss'
export function Team({children, theme}) {
    return (
        <>
            <div className={style.teamContainer}>
                <div className={theme ? style.darkTeam : style.teamCards}>
                    {children}
                </div>
            </div>
        </>
    )
}