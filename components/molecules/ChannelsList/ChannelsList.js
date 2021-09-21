import styles from "./ChannelsList.module.scss"
import { Paragraph } from "components/atoms/Paragraph/Paragraph"
import { ChannelLink as Link } from "components/atoms/Link/Link";


const ChannelsList = () => {

    return (
        <div className={styles.ChannelsList}>
            <Paragraph isBig>Channels</Paragraph>
            <Link linkChannel={"general"}>General</Link>
            <Link linkChannel={"first"}>First</Link>
            <Link linkChannel={"second"}>Second</Link>
            <Link linkChannel={"third"}>Third</Link>
            <Link linkChannel={"fourth"}>Fourth</Link>
        </div>
    )
}

export { ChannelsList }