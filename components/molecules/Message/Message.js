import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import styles from "./Message.module.scss";
import clsx from "clsx";

const Message = ({ content, user, author, avatar }) => (
    <div className={clsx(styles.message, {
        [styles.messageSent]: author === user,
        [styles.messageReceived]: author !== user
    })}>
        <img src={avatar} />
        <Paragraph>{content}</Paragraph>
    </div>
)

export { Message }