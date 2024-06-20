import { useState } from 'react';

import { AuctionCard } from '@/components';
import { Button, Modal } from '@/shared';

import { InfoText } from './components/InfoText/InfoText';

import styles from './AuctionPagePerformer.module.css';

import SupportSvg from '@/assets/images/svg/support.svg';
import InfoSvg from '@/assets/images/svg/Info.svg';

import date from '../../components/AuctionCard/date.json';

export const AuctionPagePerformer = () => {
  const [activeModal, setActiveModal] = useState(false);

  const handleModal = () => {
    setActiveModal((prev) => !prev);
  };

  return (
    <div className='container'>
      <div className={styles.inner}>
        {date.map((obj, id) => (
          <AuctionCard key={id} {...obj} />
        ))}
      </div>
      <div className={styles.info}>
        <Button className={styles.btn} variant='conteined'>
          <img className={styles.img_support} src={SupportSvg} alt='support' />
        </Button>
        <Button className={styles.btn} onClick={handleModal} variant='conteined'>
          <img className={styles.img_info} src={InfoSvg} alt='info' />
        </Button>
        <Button className={styles.button_add} variant='conteined'>
          Добавить
        </Button>
      </div>
      {activeModal && (
        <Modal className={styles.modal} onClick={handleModal}>
          <InfoText />
        </Modal>
      )}
    </div>
  );
};
