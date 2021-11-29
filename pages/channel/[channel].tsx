import { useRouter } from "next/router";
import { supabase } from "client";
import styles from "styles/Channel.module.scss";
import { Header } from "components/molecules/Header/Header";
import { Chat } from "components/molecules/Chat/Chat";
import { ChannelsList } from "components/molecules/ChannelsList/ChannelsList";
import { MessageForm } from "components/molecules/MessageForm/MessageForm";

export default function Channel() {
    const router = useRouter();
    const { channel } = router.query;
    const user = supabase.auth.user();

    return (
        <div className={styles.channel}>
            <ChannelsList />
            <div className={styles.chatPanel}>
                <Header channel={channel} />
                <Chat channel={channel} />
                <MessageForm user={user} channel={channel} />
            </div>
        </div>
    );
}
