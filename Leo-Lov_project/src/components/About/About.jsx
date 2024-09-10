import style from '../About/About.module.scss'

export function About({ layout, children, theme }) {
    const aboutClassName = layout ? `${style.aboutStyle} ${style[layout]}` : style.aboutStyle;
    const aboutClassNameDark = layout ? `${style.darkAbout} ${style[layout]}` : style.darkAbout;


    return (
        <>
            <div id='about' className={theme ? aboutClassNameDark : aboutClassName}>
                <div className={style.image}></div>
                <article>
                    {children}
                </article>
            </div>
        </>
    )
}