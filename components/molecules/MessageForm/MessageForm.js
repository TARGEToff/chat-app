import styles from "./MessageForm.module.scss";
import { supabase, sendMessage } from "client";
import { useFormik } from "formik";
import { Button } from "components/atoms/Button/Button";

const MessageForm = ({ user }) => {
    const formik = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: (values) => {
            sendMessage(values.message, user);
            formik.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.messageForm}>
            <input
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.message}
                className={styles.formInput}
            />
            <Button type="submit">Send</Button>
        </form>
    );
};

export { MessageForm };
