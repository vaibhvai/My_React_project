import { useTheme } from "./ThemeContext";
const ButtonTheme = () => {
    const {theme, toggleThme} = useTheme()
    return(
       <div >
        <div className={theme}  />
        <h1>
            {theme === 'light' ? 'Light Theme💛' :" dark Theme 🖤"}
        </h1>
        <button onClick={toggleThme}>Theme</button>
       </div>
    )
}
 export default ButtonTheme