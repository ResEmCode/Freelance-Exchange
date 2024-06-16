import { ChatWindow } from './components/ChatWindow/ChatWindow';
import { SideBar } from './components/SideBar/SideBar';
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
