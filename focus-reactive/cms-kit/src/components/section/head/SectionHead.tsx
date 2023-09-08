import React from 'react';
import styles from './sectionHead.module.scss';

interface SectionHeadProps {
  icon?: string;
  title: string;
}

const Section = ({ icon, title }: SectionHeadProps) => {
  return (
    <div className={styles.head}>
      {icon && <img src={icon} alt="" />}
      <h2 dangerouslySetInnerHTML={{ __html: `${title}` }}></h2>
    </div>
  );
};

export default Section;
