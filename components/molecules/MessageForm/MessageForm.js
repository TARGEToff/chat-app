import styles from "./MessageForm.module.scss";
import { sendMessage } from "client";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { useFormik } from "formik";
import { Button } from "components/atoms/Button/Button";
import * as Yup from "yup";

const MessageForm = ({ user, channel }) => {
    const validationSchema = Yup.object().shape({
        message: Yup.string()
            .max(100, "Too many characters")
            .required("This field is required"),
    });

    const formik = useFormik({
        initialValues: {
            message: "",
        },
        validationSchema,
        onSubmit: (values) => {
            sendMessage(values.message, user, channel);
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
            <Paragraph>{formik.errors.message}</Paragraph>
            <Button type="submit">Send</Button>
        </form>
    );
};

export { MessageForm };
