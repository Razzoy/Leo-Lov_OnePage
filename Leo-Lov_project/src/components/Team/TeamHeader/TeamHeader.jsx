export function TeamHeader({image = '!Missing Image!'}) {
    return (
        <>
            <img src={`../src/assets/teamImages/${image}`}></img>
        </>
    )
}