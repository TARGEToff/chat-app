import styles from "../styles/Home.module.scss";
import { signInWith } from "client.js";
import { Heading } from "components/atoms/Heading/Heading";
import { Button } from "components/atoms/Button/Button";

export default function Home() {
    return (
        <div className={styles.home}>
            <Heading>chat-app</Heading>
                <div className={styles.signIn}>
                    <Button onClick={() => signInWith("google")}>
                        Sign In with google
                    </Button>
                    <Button onClick={() => signInWith("discord")}>
                        Sign In with discord
                    </Button>
                    <Button onClick={() => signInWith("twitch")}>
                        Sign In with twitch
                    </Button>
                </div>
        </div>
    );
}
