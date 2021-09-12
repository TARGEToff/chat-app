import styles from "./Chat.module.scss"

const Chat = () => (
    <div className={styles.chat}>
        <form className={styles.form}>
            <input className={styles.formInput} />
            <button className={styles.formButton} type="submit" >Send</button>
        </form>
    </div>
)

export { Chat };
