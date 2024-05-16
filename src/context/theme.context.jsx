import { createContext, useState } from "react";

const ThemeContext = createContext() // esto crea el componente

//2. Componente Envoltorio
function ThemeWrapper(props) {

  // aqui existiran los estados, variables, funciones, etc.
  const [ isDarkTheme, setIsDarkTheme ] = useState(false)

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  // este objeto tendrá toda la data que queremos compartir
  const passedContext = {
    isDarkTheme,
    handleToggleTheme
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export {
  ThemeContext,
  ThemeWrapper
}