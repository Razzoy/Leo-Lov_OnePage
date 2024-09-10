import style from '../Footer/Footer.module.scss'

export function Footer({theme}) {
    return (
        <>
            <div id='contact' className={theme ? style.darkFooter : style.footerContainer}>
                <ul>
                    <h3>Adresse</h3>
                    <li>Find os her:</li>
                    <li>Maldive rd. 22</li>
                    <li>Seychelle Islands</li>
                </ul>
                <ul>
                    <h3>Kontakt</h3>
                    <li>Kontakt os her:</li>
                    <li>email@mail.dk</li>
                    <li>Tlf: 0192 3023</li>
                </ul>
                <ul>
                    <h3>Politik</h3>
                    <li>Vores politikker:</li>
                    <li>Privatlivspolitk</li>
                    <li>Cookiepolitik</li>
                    <li>Generalle betingelse</li>
                </ul>
                <div className={style.mediaContainer}>
                    <h3>Sociale Medier</h3>
                    <div className={style.mediaLinks}>
                        <img src={`../src/assets/facebook.svg`} alt="facebook" />
                        <img src={`../src/assets/linkedin.svg`} alt="LinkedIn" />
                    </div>
                </div>
            </div>
        </>
    )
}