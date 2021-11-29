import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import styles from "./Message.module.scss";
import clsx from "clsx";

interface Props {
    content: string;
    userId: string;
    authorId: string;
    authorAvatar: string;
}

const Message = ({ content, userId, authorId, authorAvatar }: Props) => (
    <div className={clsx(styles.message, {
        [styles.messageSent]: authorId == userId,
        [styles.messageReceived]: authorId != userId
    })}>
        <img src={authorAvatar} />
        <Paragraph>{content}</Paragraph>
    </div>
)

export { Message }