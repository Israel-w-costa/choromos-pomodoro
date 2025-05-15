import styles from "./styles.module.css"

type headingProps = {
  children: React.ReactNode
}

export function Heading({children}:headingProps) {
  return (
    <>
      <div className={styles.heading}>{children}</div>
    </>
  )

}