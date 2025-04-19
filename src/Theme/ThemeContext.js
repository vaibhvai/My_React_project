const { createContext, useState, useEffect, useContext } = require("react");

const ThemeContext = createContext()
 export const AccessProvider = ({children}) => {
    const [theme, setTheme] = useState("light")
    const toggleThme = () => {
        setTheme((prev) => (prev === "light" ? 'dark' : 'light'))
    }
    return(
        <ThemeContext.Provider value={{theme, toggleThme}}>
        {children}
        </ThemeContext.Provider>
    )
 }
export const useTheme = () => {
    return useContext(ThemeContext)
}