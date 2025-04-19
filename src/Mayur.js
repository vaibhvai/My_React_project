import { useTheme } from "./Theme/ThemeContext"
const Mayur = () => {
    const {theme, toggleThme} = useTheme()
    return(
      <><>
            <button onClick={toggleThme}>

            </button></><h1 className={theme}>
                {theme === 'light' ? 'Light Theme💛' : " dark Theme 🖤"} </h1></>
      
    )
}
export default Mayur