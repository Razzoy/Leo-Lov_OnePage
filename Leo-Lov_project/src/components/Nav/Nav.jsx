import style from '../Nav/Nav.module.scss'


export function Nav() {

  return (
    <>
      <nav className={style.navBar}>
        <ul>
          <li>Hjem</li>
          <li>Advokaterne</li>
          <li>Om LeoLov</li>
          <li>Kontakt</li>
        </ul>
        <h3><span>Leo-</span>Lov</h3>
      </nav>
    </>
  )
}