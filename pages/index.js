import styles from "../styles/Home.module.scss";
import { signInWithGoogle } from "client.js";
import { Heading } from "components/atoms/Heading/Heading";
import { Button } from "components/atoms/Button/Button";

export default function Home() {
    return (
        <div className={styles.home}>
            <Heading>chat-app</Heading>
                <div className={styles.signIn}>
                    <Button onClick={() => signInWithGoogle()}>
                        Sign In with google
                    </Button>
                </div>
        </div>
    );
}
