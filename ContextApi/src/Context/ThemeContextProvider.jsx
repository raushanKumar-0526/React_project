import ThemeContext from "./ThemeContext"

function ThemeContextProvider({children, value}) {

  return (
    <ThemeContext.Provider value={value} >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
