import styles from "../styles/Home.module.scss";
import { supabase } from "client.js";
import { Heading } from "components/atoms/Heading/Heading";
import { Button } from "components/atoms/Button/Button";

export default function Home() {

    async function signInWithGoogle() {
        const { user, session, error } = await supabase.auth.signIn({
            provider: "google",
        }, {
            redirectTo: "https://localhost:3000/chat",
        });
    }
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
