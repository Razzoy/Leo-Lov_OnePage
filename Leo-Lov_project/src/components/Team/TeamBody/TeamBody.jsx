export function TeamBody({ header = '!Missing HeaderText!', text = '!Missing Context!' }) {
    return (
        <>
            <article>
                <h4>{header}</h4>
                <p>{text}</p>
            </article>
        </>
    )
}