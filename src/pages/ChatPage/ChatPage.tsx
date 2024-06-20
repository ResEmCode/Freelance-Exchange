import { ChatWindow, SideBar } from './components';

import styles from './ChatPage.module.css';

export const ChatPage = () => {
  return (
    <div className='container'>
      <div className={styles.body}>
        <SideBar />
        <ChatWindow />
      </div>
    </div>
  );
};
