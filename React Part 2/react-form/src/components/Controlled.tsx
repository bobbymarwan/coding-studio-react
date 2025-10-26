import { useState, type ChangeEventHandler } from "react";

function Controlled() {
    const [nama, setNama] = useState('')
    
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setNama(event.target.value)
    }

    return (
        <div>
            <label>
                Nama:
                <input type="text" value={nama} onChange={handleChange}/>
            </label>
            <p>
                Halo, {nama}
            </p>
        </div>
    )
}

export default Controlled