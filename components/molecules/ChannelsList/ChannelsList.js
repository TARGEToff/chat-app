import styles from "./ChannelsList.module.scss"
import Link from "next/link";
import { Paragraph } from "components/atoms/Paragraph/Paragraph"


const ChannelsList = () => {

    return (
        <div className={styles.ChannelsList}>
            <Paragraph isBig>Channels list</Paragraph>
            <Link href="/chat/general">General</Link>
            <Link href="/chat/first">First</Link>
            <Link href="/chat/second">Second</Link>
            <Link href="/chat/third">Third</Link>
            <Link href="/chat/fourth">Fourth</Link>
        </div>
    )
}

export { ChannelsList }