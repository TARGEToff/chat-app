import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import { Heading } from 'components/atoms/Heading/Heading';
import { Button } from 'components/atoms/Button/Button';
import { Chat } from 'components/molecules/Chat/Chat';

export default function Home() {
    const [user, setUser] = useState(false);
  return (
    <div className={styles.home}>
        <Heading>chat-app</Heading>
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Button>Sign out</Button>
            </div>
            <Chat />
        </div>
    </div>
  )
}
