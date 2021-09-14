import styles from "../styles/Chat.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { signout, supabase, getMessages } from "client.js";
import { Heading } from "components/atoms/Heading/Heading";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { Button } from "components/atoms/Button/Button";
import { Message } from "components/molecules/Message/Message";
import { MessageForm } from "components/molecules/MessageForm/MessageForm";

export default function Chat() {
    const user = supabase.auth.user();
    const [data, setData] = useState([])
    useEffect(() => {
        getMessages()
        console.log("a");
    }, [])
    async function getMessages() {
        const { data, error } = await supabase
        .from("messages")
        setData(data);
    }
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
