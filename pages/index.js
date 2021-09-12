import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
        <h2>chat-app</h2>
        <div className={styles.chat}>
            <form className={styles.form}>
                <input className={styles.formInput} />
                <button className={styles.formButton} type="submit" >Send</button>
            </form>
        </div>
    </div>
  )
}
