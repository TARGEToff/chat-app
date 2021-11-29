import styles from "./Heading.module.scss";

interface Props {
    children: React.ReactNode;
    isBig?: boolean;
}

const Heading = ({ isBig = false, children }: Props) => (
    <>
        {isBig ? (
            <h1 className={styles.big}>{children}</h1>
        ) : (
            <h2 className={styles.normal}>{children}</h2>
        )}
    </>
);

export { Heading };
