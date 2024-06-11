import React, { FC } from 'react';
import styles from './Modal.module.css';

import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  onClick: () => void;
}

const modal = document.getElementById('modal');

export const Modal: FC<ModalProps> = ({ children, onClick }) => {
  return (
    modal &&
    createPortal(
      <div onClick={onClick} className={styles.overlay}>
        <div onClick={(e) => e.stopPropagation()} className={styles.popup}>
          {children}
        </div>
      </div>,
      modal
    )
  );
};
