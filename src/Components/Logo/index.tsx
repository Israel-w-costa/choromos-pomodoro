import { TimerIcon } from "lucide-react"
import styles from "./styles.module.css"

export function Logo () {
  return (
  <div className={styles.logo}>
    <a className={styles.logoLink}> 
      <TimerIcon/>
      <span>Chornos</span>
    </a>
  </div>
  )
}