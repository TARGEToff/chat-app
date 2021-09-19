import styles from "./Chat.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Message } from "components/molecules/Message/Message";
import { supabase, getMessages } from "client.js";

const Chat = ({channel}) => {
    const user = supabase.auth.user();
    const [data, setData] = useState([])
    useEffect(() => {
            getMessages(setData, channel)
    }, [channel])
    const subscription = supabase
        .from(channel)
        .on('*', payload => {
          getMessages(setData, channel)
        })
        .subscribe()

    return (
        <div className={styles.chat}>
            { data && 
                data.map(
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
                )
            }
        </div>
    )
}

export { Chat }