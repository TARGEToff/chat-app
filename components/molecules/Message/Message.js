import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import styles from "./Message.module.scss";
import clsx from "clsx";

const Message = ({ content, userId, authorId, avatar }) => (
    <div className={clsx(styles.message, {
        [styles.messageSent]: authorId === userId,
        [styles.messageReceived]: authorId !== userId
    })}>
        <img src={avatar} />
        <Paragraph>{content}</Paragraph>
    </div>
)

export { Message }