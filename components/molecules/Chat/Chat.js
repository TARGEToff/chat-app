import styles from "./Chat.module.scss"
import { Button } from "components/atoms/Button/Button";

const Chat = () => (
    <div className={styles.chat}>
        <main className={styles.main}>

        </main>
        <form className={styles.form}>
            <input className={styles.formInput} />
            <Button type="submit">Send</Button>
        </form>
    </div>
)

export { Chat };
