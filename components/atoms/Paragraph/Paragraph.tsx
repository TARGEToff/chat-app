import react from "react";
import styles from "./Paragraph.module.scss";

interface Props {
    children: React.ReactNode;
    isBig?: boolean
}

const Paragraph = ({ isBig = false, children }: Props) => (
    <>
        {isBig ? (
            <p className={styles.big}>{children}</p>
        ) : (
            <p className={styles.normal}>{children}</p>
        )}
    </>
)

export { Paragraph };