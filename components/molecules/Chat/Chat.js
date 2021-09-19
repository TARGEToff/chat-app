import styles from "./Chat.module.scss";
import { useState, useEffect } from "react";
import { Message } from "components/molecules/Message/Message";
import { supabase, getMessages } from "client.js";

const Chat = () => {
    const user = supabase.auth.user();
    const [data, setData] = useState([])
    useEffect(() => {
        getMessages(setData)
    }, [])
    const subscription = supabase
        .from('messages')
        .on('*', payload => {
          getMessages(setData)
        })
        .subscribe()

    return (
        <div className={styles.chat}>
            {data.map(
                ({ id, content, authorAvatar, authorId }) => (
                    <Message
                        key={id}
                        id={id}
                        userId={user.id}
                        content={content}
                        authorId={authorId}
                        avatar={authorAvatar}
                        user={user.user_metadata.full_name}
                    />
                )
            )}
        </div>
    )
}

export { Chat }