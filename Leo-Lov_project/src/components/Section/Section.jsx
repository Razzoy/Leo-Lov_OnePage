import style from '../Section/Section.module.scss'

export function Section(props){
    return(
        <section className={StylePropertyMap.sectionStyle}>{props.children}</section>
    )
}