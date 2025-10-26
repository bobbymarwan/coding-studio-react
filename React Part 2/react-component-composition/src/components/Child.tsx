type UserProps = {
    nama: string,
    umur: number
}

function Child({nama, umur}: UserProps) {
    return(
        <h1>Aku bernama {nama} dan berumur {umur}</h1>
    );
}

export default Child;