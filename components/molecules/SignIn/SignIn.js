import styles from "./SignIn.module.scss";
import { Button } from "components/atoms/Button/Button";

const SignIn = () => (
    <div className={styles.SignIn}>
        <Button>Sign In</Button>
    </div>
)

export {SignIn}