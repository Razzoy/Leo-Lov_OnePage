import style from '../Header/Header.module.scss'

export function Header() {

  return (
    <>
      <div className={style.headerContainer}>
        <header id='home'>
          <h1><span>Leo-</span>Lov</h1>
          <h4>Lov og ret kan være et plaster! <br className={style.lineBreak} /> Hvis du ellers har knaster!</h4>
        </header>
      </div>
    </>
  )
}