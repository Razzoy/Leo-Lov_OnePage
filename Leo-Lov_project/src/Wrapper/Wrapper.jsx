import style from './Wrapper.module.scss'

export function Wrapper({children, theme}){
    return(
        <div className={theme ? style.darkWrapper : style.wrapperContainer}>
            {children}
        </div>
    )
}