import styles from "../styles/Home.module.scss";
import Link from "next/link"
import { signout } from "client.js";
import { Heading } from "components/atoms/Heading/Heading";
import { Button } from "components/atoms/Button/Button";

export default function Chat() {
    return (
        <div className={styles.home}>
            <Heading>chat-app</Heading>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Link href="/">
                        <Button onClick={() => signout()}>Sign out</Button>
                    </Link>
                </div>
                <div className={styles.chat}></div>
                <form className={styles.form}>
                    <input className={styles.formInput} />
                    <Button type="submit">Send</Button>
                </form>
            </div>
        </div>
    );
}
