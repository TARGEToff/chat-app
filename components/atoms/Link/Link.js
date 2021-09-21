import styles from "./Link.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

const ChannelLink = ({ linkChannel, children }) => {
    const router = useRouter();
    const { channel } = router.query;

    return (
        <Link href={`/chat/${linkChannel}`}>
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
