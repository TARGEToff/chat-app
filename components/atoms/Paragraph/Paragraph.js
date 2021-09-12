import react from "react";
import styles from "./Paragraph.module.scss";

const Paragraph = ({ isBig = false, children }) => (
    <>
        {isBig ? (
            <p className={styles.big}>{children}</p>
        ) : (
            <p className={styles.normal}>{children}</p>
        )}
    </>
)

export { Paragraph };