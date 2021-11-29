import styles from "./ChannelLink.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    linkChannel: string;
}

const ChannelLink = ({ linkChannel, children }: Props) => {
    const router = useRouter();
    const { channel } = router.query;

    return (
        <Link href={`/channel/${linkChannel}`}>
            <a
                className={clsx({
                    [styles.active]: linkChannel === channel,
                    [styles.link]: linkChannel !== channel,
                })}
            >
                {children}
            </a>
        </Link>
    );
};

export { ChannelLink };
