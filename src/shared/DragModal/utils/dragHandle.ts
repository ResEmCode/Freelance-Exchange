import type { DragEvent } from 'react';

export const dragHandle = (
  e: DragEvent<HTMLSpanElement>,
  func: (state: boolean) => void,
  state: boolean
) => {
  e.preventDefault();
  func(state);
};
