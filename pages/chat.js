import styles from "../styles/Chat.module.scss";
import { useState, useEffect } from "react";
import { supabase, getMessages } from "client.js";
import { Heading } from "components/atoms/Heading/Heading";
import { Message } from "components/molecules/Message/Message";
import { MessageForm } from "components/molecules/MessageForm/MessageForm";
import { Header } from "components/molecules/Header/Header";

export default function Chat() {
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
        <div className={styles.home}>
            <Heading>chat-app</Heading>
            <div className={styles.wrapper}>
                <Header user={user} />
                <div className={styles.chat}>
                    {data.map(
                        ({ id, content, author, authorAvatar }) => (
                            <Message
                                key={id}
                                id={id}
                                content={content}
                                author={author}
                                avatar={authorAvatar}
                                user={user.user_metadata.full_name}
                            />
                        )
                    )}
                </div>
                <MessageForm user={user}/>
            </div>
        </div>
    );
}
