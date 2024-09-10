import style from '../Nav/Nav.module.scss'


export function Nav({action, theme}) {




  return (
    <>
      <nav className={theme ? style.darkModeNav : style.navBar}>
        <ul>
          <li><a href='#home'>Hjem</a></li>
          <li><a href='#about'>Om LeoLov</a></li>
          <li><a href='#lawyer'>Advokaterne</a></li>
          <li><a href='#contact'>Kontakt</a></li>
          <li><button onClick={action}>Ændre Tema</button></li>
        </ul>
        <h3><span>Leo-</span>Lov</h3>
      </nav>
    </>
  )
}