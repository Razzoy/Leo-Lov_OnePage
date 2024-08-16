import style from '../Header/Header.module.scss'

export function Header() {

    return (
      <>
        <div className = {style.headerContainer}>
            <header>
                <h1><span>Leo-</span>Lov</h1>
                <h4>Lov og ret kan være et plaster! Hvis du ellers har knaster!</h4>
            </header>
        </div>
      </>
    )
  }