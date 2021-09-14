import styles from "./MessageForm.module.scss";
import { supabase } from "client";
import { useFormik } from "formik";
import { Button } from "components/atoms/Button/Button";

const MessageForm = ({ user }) => {
    const formik = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: (values) => {
            sendMessage(values.message);
            formik.resetForm();
        },
    });

    async function sendMessage(message) {
        const getId = () => `${Math.random()}`.toString(36).substr(2, 9);
        const id = parseInt(getId());
        const { data, error } = await supabase
           .from('messages')
           .insert([
               { id, author: user.user_metadata.full_name, authorAvatar: user.user_metadata.avatar_url, content: message }
           ])
    }

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
