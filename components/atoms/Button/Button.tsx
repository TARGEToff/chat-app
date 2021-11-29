import styles from "./Button.module.scss";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => (
    <button className={styles.button} {...props}>
        {children}
    </button>
);

export { Button };
