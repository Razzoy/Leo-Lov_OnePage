import style from '../About/About.module.scss'

export function About({ layout, children }) {
    const aboutClassName = layout ? `${style.aboutStyle} ${style[layout]}` : style.aboutStyle;

    return (
        <>
            <div id='about' className={aboutClassName}>
                <div className={style.image}></div>
                <article>
                    {children}
                </article>
            </div>
        </>
    )
}