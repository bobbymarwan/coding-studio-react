import { useRef, type FormEventHandler } from "react";

function Uncontrolled() {
    const inputEmail = useRef<HTMLInputElement>(null)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        if(inputEmail.current) {
            console.log('Email yang kamu masukkan: ', inputEmail.current.value)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input type="email" ref={inputEmail}/>
            </label>
            <button type="submit">Kirim</button>
        </form>
    )
}

export default Uncontrolled