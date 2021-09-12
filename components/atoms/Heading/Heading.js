import react from "react";
import styles from "./Heading.module.scss";

const Heading = ({ isBig = false, children }) => (
    <>
        {isBig ? (
            <h1 className={styles.big}>{children}</h1>
        ) : (
            <h2 className={styles.normal}>{children}</h2>
        )}
    </>
)

export { Heading };