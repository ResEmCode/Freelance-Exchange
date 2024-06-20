import { Button, Input } from '@/shared';

import styles from './SendMenu.module.css';

import SendSvg from '@/assets/images/svg/send.svg';
import SmilesSvg from '@/assets/images/svg/smiles.svg';
import MicrophoneSvg from '@/assets/images/svg/microphone.svg';

export const SendMenu = () => {
  return (
    <div className={styles.menu}>
      <Input className={styles.input} variant='auction' placeholder='Напишите текст...' />
      <div className={styles.options}>
        <button>
          <img src={SmilesSvg} alt='smile' />
        </button>
        <button>
          <img src={MicrophoneSvg} alt='microphone' />
        </button>
      </div>
      <Button variant='conteined' className={styles.btn}>
        <img className={styles.img} src={SendSvg} alt='send' />
      </Button>
    </div>
  );
};
