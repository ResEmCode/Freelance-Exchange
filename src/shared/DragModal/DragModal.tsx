import { ComponentProps, useState } from 'react';

import { dragDropHandle, dragHandle } from './utils';

import styles from './DragModal.module.css';
import clsx from 'clsx';

interface DragModalProps extends ComponentProps<'div'> {}
export const DragModal = ({ className }: DragModalProps) => {
  const [drag, setDrag] = useState(false);

  return drag ? (
    <div
      className={clsx(styles.window, styles.drag_active, className)}
      onDragStart={(e) => dragHandle(e, setDrag, true)}
      onDragLeave={(e) => dragHandle(e, setDrag, false)}
      onDragOver={(e) => dragHandle(e, setDrag, true)}
      onDrop={(e) => dragDropHandle(e, setDrag)}
    >
      {' '}
      Отпустите файл для загрузки
    </div>
  ) : (
    <div
      className={clsx(styles.window, className)}
      onDragStart={(e) => dragHandle(e, setDrag, true)}
      onDragLeave={(e) => dragHandle(e, setDrag, false)}
      onDragOver={(e) => dragHandle(e, setDrag, true)}
    >
      Перетащите файл
    </div>
  );
};
