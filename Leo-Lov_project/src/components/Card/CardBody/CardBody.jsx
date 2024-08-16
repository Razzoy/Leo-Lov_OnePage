export function CardBody({ bodyText = '!Missing Body Text!' }) {
    return (
        <>
            <article>
                <p>{bodyText}</p>
            </article>
        </>
    )
}