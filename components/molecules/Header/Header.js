import styles from "./Header.module.scss"
import Link from "next/link";
import { signout } from "client";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { Button } from "components/atoms/Button/Button";

const Header = ({ user }) => (
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
);

export { Header }