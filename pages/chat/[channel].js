import { useRouter } from 'next/router';
import { supabase } from "client.js";
import styles from "styles/Channel.module.scss";
import { Heading } from 'components/atoms/Heading/Heading';
import { Header } from 'components/molecules/Header/Header';
import { Chat } from 'components/molecules/Chat/Chat';
import { MessageForm } from 'components/molecules/MessageForm/MessageForm';

export default function Channel() {
    const router = useRouter()
    const { channel } = router.query
    const user = supabase.auth.user();

    return (
        <div className={styles.channel}>
            <Heading isBig>chat-app</Heading>
            <div className={styles.wrapper}>
                <Header user={user} channel={channel} />
                <Chat channel={channel} />
                <MessageForm user={user} channel={channel} />
            </div>
        </div>
    )
}

