import styles from "./Heading.module.css"
import { TimerIcon } from "lucide-react"

// type headingProps ={
//   children:React.ReactNode
// }

export function Heading() {
  return (
    <>
      <div className={styles.heading}>
        <button>
          <TimerIcon />
        </button>
        <h1 className={styles.heading}> Chronos </h1>
      </div>
    </>
  )

}