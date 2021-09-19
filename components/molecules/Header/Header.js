import styles from "./Header.module.scss"
import Image from "next/image";
import Link from "next/link";
import { signout } from "client";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { Button } from "components/atoms/Button/Button";
import Channel from "public/channel.svg";

const Header = ({ user, channel }) => (
<div className={styles.header}>
    {user && (
        <>
                <Image
                    src={Channel}
                    height={24}
                    width={24}
                />
            <Paragraph isBig>
                {channel}
            </Paragraph>
        </>
    )}
    <Button onClick={() => signout()}>
        <Link href="/">Sign out</Link>
    </Button>
</div>
);

export { Header }