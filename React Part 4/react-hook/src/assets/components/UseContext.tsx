import { Children, createContext, useContext, useState, type ReactElement, type ReactNode } from "react";

const NameContext = createContext('')

type NameProviderProps = {
    children: ReactNode
}

export const useName = () => {
  const context = useContext(NameContext)
  if (!context) {
    throw new Error("useName must be used within a NameProvider")
  }
  return context
};

function NameProvider({children}: NameProviderProps) {
    const [name, setName] = useState('John Doe')

    return (
        <NameContext.Provider value={name}>
            {children}
        </NameContext.Provider>
    )
}

function Greeting() {
    const name = useName()
    return (
        <div>
            Hello, {name}!    
        </div>
    )
}

function App() {
    return (
        <NameProvider>
            <Greeting/>
        </NameProvider>
    )
}

export default App