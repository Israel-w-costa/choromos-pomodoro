import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState, useEffect } from "react"

export function Menu () {
  
  type AvailebloTheme = "dark" | "light"

  const [theme,setTheme] = useState <AvailebloTheme>("dark")

  function handleChangeTheme (
     event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault()
    setTheme(prevTheme=>{
      const nextTheme = prevTheme ==="dark" ?"light": "dark"
      return nextTheme
    })
  }

  useEffect(()=> {
    document.documentElement.setAttribute("data-theme", theme)
  },[theme])

  return (
  <nav className={styles.menu}>
    <a className={styles.menuLink}
     href="#" 
     aria-label="ir para página principal"
     title="ir para página principal"> 

      <HouseIcon/>
    </a>

    <a className={styles.menuLink} 
    href="#" 
    aria-label="ver histórico"
    title="ver histórico"> 
      <HistoryIcon/>
    </a>

    <a className={styles.menuLink} 
    href="#" 
    aria-label="configurações"
    title="configurações"> 
      <SettingsIcon/>
    </a>

    <a className={styles.menuLink} 
    href="#" 
    aria-label="mudar tema"
    title="mudar tema"
    onClick={handleChangeTheme}> 
      <SunIcon/>
    </a>
  </nav>
  )
}