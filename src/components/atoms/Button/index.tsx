import React, { FC } from 'react';
import styles from './style.module.scss';

type Props = { text: string, handleClick: () => void };

const ButtonFactory = (type: string): FC<Props> => ({ text, handleClick }) => {
  return (
    <button
    className={[styles.button, styles[`button-${type}`]].join(' ')}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export const ButtonCommon = ButtonFactory('common');
export const ButtonWarning = ButtonFactory('warning');
export const ButtonError = ButtonFactory('error');