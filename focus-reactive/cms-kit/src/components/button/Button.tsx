import React, { ReactNode } from 'react';
import styles from './button.module.scss';

interface SectionHeadProps {
  children: ReactNode;
}

export const Button = ({ children }: SectionHeadProps) => {
  return <button className={styles.button}>{children}</button>;
};
