import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { signout } from "client";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { Button } from "components/atoms/Button/Button";
import channelImg from "public/channel.svg";

interface Props {
    channel: Channel;
}

const Header = ({ channel }: Props) => (
    <div className={styles.header}>
        {channel && (
            <>
                <Image src={channelImg} height={24} width={24} />
                <Paragraph isBig>{channel}</Paragraph>
            </>
        )}
        <Button onClick={() => signout()}>
            <Link href="/">Sign out</Link>
        </Button>
    </div>
);

export { Header };
