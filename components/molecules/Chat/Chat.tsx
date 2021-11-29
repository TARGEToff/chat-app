import styles from "./Chat.module.scss";
import { useState, useEffect } from "react";
import { Message } from "components/molecules/Message/Message";
import { supabase, getMessages } from "client";

interface Props {
    channel: Channel;
}

const Chat = ({ channel }: Props) => {
    const user: User = supabase.auth.user();
    const [data, setData] = useState<Message[]>([]);
    console.log(data);
    console.log(user);
    useEffect(() => {
        getMessages(setData, channel);
    }, [channel]);
    const subscription = supabase
        .from(channel)
        .on("*", () => {
            getMessages(setData, channel);
        })
        .subscribe();

    return (
        <div className={styles.chat}>
            {data && user ? (
                data.map(({ id, content, authorAvatar, authorId }) => (
                    <Message
                        key={id}
                        userId={user.id}
                        content={content}
                        authorId={authorId}
                        authorAvatar={authorAvatar}
                    />
                ))
            ) : (
                <p>Something went wrong</p>
            )}
        </div>
    );
};

export { Chat };
