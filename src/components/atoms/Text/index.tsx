import React, { FC } from 'react';
import styles from './style.module.scss';

type Props = { text: string }

const TextFactory = (type: string): FC<Props> => ({ text }) => {
  return (
    <p
      className={[styles.text, styles[`text-${type}`]].join(' ')}
    >
      {text}
    </p>
  );
};

export const TextCommon = TextFactory('common');
export const TextWarning = TextFactory('warning');
export const TextError = TextFactory('error');