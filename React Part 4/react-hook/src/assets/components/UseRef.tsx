import { useRef } from "react"

function UseRef() {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        if(inputRef.current) {
            inputRef.current.focus()
        }
    }

    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default UseRef