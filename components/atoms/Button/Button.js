import styles from "./Button.module.scss"

const Button = ({ children }) => (
    <button className={styles.button}>{children}</button>
)

export { Button }