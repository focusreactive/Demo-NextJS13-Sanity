import React, { ReactNode } from 'react';
import styles from './customLink.module.scss';

interface CustomLinkProps {
  children: ReactNode;
}

export const CustomLink = ({ children }: CustomLinkProps) => {
  return (
    <a href="#" className={styles.link}>
      {children}
    </a>
  );
};
