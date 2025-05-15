import { TimerIcon } from "lucide-react"
import styles from "./styles.module.css"

export function Menu () {
  return (
  <nav className={styles.menu}>
    <a className={styles.menuLink}> 
      <TimerIcon/>
    </a>

    <a className={styles.menuLink}> 
      <TimerIcon/>
    </a>

    <a className={styles.menuLink}> 
      <TimerIcon/>
    </a>

    <a className={styles.menuLink}> 
      <TimerIcon/>
    </a>
  </nav>
  )
}