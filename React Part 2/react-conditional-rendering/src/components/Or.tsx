function Or() {
    const error = <h1>ada salah</h1>

    return (
        <div>
            {error || <h1>Tidak ada kesalahan</h1>}
        </div>
    )
}

export default Or