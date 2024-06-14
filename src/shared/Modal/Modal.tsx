import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import React, { ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

interface ModalProps extends ComponentProps<'div'> {
  children: React.ReactNode;
  onClick: () => void;
}

const modal = document.getElementById('modal');

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, onClick, className }, ref) => {

    return (
      modal &&
      createPortal(
        <div className={styles.overlay} onClick={onClick}>
          <div
            ref={ref}
            className={clsx(styles.body, className)}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        modal
      )
    );
  }
);
