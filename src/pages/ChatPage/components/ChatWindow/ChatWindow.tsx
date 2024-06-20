import { Typography } from '@/components';

import { SendMenu } from '../SendMenu/SendMenu';

import styles from './ChatWindow.module.css';
import clsx from 'clsx';

import data from '../../data.json';

export const ChatWindow = () => {
  const chats = data.chats;
  return (
    <div className={styles.inner}>
      <Typography variant='title32_bold'>{chats.title}</Typography>
      <div className={styles.window}>
        <div className={styles.messages}>
          {chats?.messages.map((obj) => (
            <div className={clsx(styles.block, obj.person === 'me' && styles.block_right)}>
              {obj.person === 'me' ? (
                <>
                  <Typography className={styles.text} tag='p' variant='paragraph16_regular'>
                    {obj.text}
                  </Typography>
                  <img
                    src={obj.person === 'me' ? chats.selfImageUrl : chats.frendImageUrl}
                    alt='avatar'
                    className={styles.img}
                  />
                </>
              ) : (
                <>
                  <img
                    src={obj.person === 'me' ? chats.selfImageUrl : chats.frendImageUrl}
                    alt='avatar'
                    className={styles.img}
                  />
                  <Typography className={styles.text} tag='p' variant='paragraph16_regular'>
                    {obj.text}
                  </Typography>
                </>
              )}
            </div>
          ))}
        </div>
        <SendMenu />
      </div>
    </div>
  );
};
