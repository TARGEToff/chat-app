import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import { Heading } from 'components/atoms/Heading/Heading';
import { Chat } from 'components/molecules/Chat/Chat';

export default function Home() {
    const [user, setUser] = useState(false);
  return (
    <div className={styles.container}>
        <Heading>chat-app</Heading>
        <Chat />
    </div>
  )
}
