import styles from "../styles/Chat.module.scss";
import Link from "next/link";
import Image from "next/image";
import { signout, supabase } from "client.js";
import { Heading } from "components/atoms/Heading/Heading";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { Button } from "components/atoms/Button/Button";

export default function Chat() {
    const user = supabase.auth.user();
    console.log(user);
    return (
        <div className={styles.home}>
            <Heading>chat-app</Heading>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    {user && (
                        <>
                            <img
                                src={user.user_metadata.avatar_url}
                            />
                            <Paragraph>
                                {user.user_metadata.full_name}
                            </Paragraph>
                        </>
                    )}
                    <Button onClick={() => signout()}>
                        <Link href="/">Sign out</Link>
                    </Button>
                </div>
                <div className={styles.chat}></div>
                <form className={styles.messageForm}>
                    <input className={styles.formInput} />
                    <Button>Send</Button>
                </form>
            </div>
        </div>
    );
}
