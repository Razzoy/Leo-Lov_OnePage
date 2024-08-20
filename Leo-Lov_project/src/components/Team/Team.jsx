import style from '../Team/Team.module.scss'
export function Team(props) {
    return (
        <>
            <div className={style.teamContainer}>
                <h2>MØD HOLDET</h2>
                <div className={style.teamCards}>
                    {props.children}
                </div>
            </div>
        </>
    )
}