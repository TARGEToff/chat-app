import styles from "./MessageForm.module.scss";
import { useFormik } from "formik";
import { Button } from "components/atoms/Button/Button";

const MessageForm = () => {
    const formik = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
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
