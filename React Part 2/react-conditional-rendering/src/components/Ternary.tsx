function Ternary() {
    const isLoggedIn:boolean = false
    return (
        <div>
            {isLoggedIn ? <h1>Selamat Datang</h1>: <h1>Silakan Masuk.</h1>}
        </div>
    )
}

export default Ternary