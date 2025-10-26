function And() {
    const user: string = 'Bobby'
    return (
        <div>
            {user && <h1>Halo, {user}</h1>}
        </div>
    )
}

export default And;