import style from '../Section/Section.module.scss'

export function Section({ children, layout }) {
    const sectionClassName = layout ? `${style.sectionStyle} ${style[layout]}` : style.sectionStyle;

    return (
        <section className={sectionClassName}>
            {children}
        </section>
    )
}