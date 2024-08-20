import style from '../Map/Map.module.scss'
export function Map() {
    return (
        <>
            <div className={style.mapContainer}>
                <p>
                    “Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er.
                </p>
                <ul>
                    <li>Leo-Lov ApS</li>
                    <li>Maldive rd.22</li>
                    <li>Seychelles</li>
                </ul>
            </div>
        </>
    )
}