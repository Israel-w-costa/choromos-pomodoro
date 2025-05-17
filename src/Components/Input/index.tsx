import styles from "./styles.module.css"

type DefaultInputProps = {
  id :string;
  labelText:string;
} & React.ComponentProps<"input">

export function Input ({id, labelText,...rest}:DefaultInputProps) {
  return (
    <>
    <div className={styles.content}>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id="input" type="text" {...rest}></input>
    </div>
    </>
  )
}