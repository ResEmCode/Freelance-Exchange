import type { DragEvent } from 'react';

export const dragDropHandle = (e: DragEvent<HTMLSpanElement>, func: (state: boolean) => void) => {
  e.preventDefault();
  const files = [...e.dataTransfer.files];
  console.log(files);
  func(false);
};
