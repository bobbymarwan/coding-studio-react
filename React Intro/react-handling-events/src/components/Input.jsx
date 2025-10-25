function Input() {
    const inputOnChange = (event) => {
        console.log(event.target.value);
    } 
    return (
        <>
            <input type="text" onChange={inputOnChange}/>
        </>
    )
}

export default Input;