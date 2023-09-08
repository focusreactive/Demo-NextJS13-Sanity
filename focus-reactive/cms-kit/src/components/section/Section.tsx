import React, { ReactNode } from 'react';
import styles from './section.module.scss';
import cn from 'classnames';

interface SectionProps {
  children: ReactNode;
  isLight?: boolean;
  className?: string;
  radius?: string;
  neighborBg?: string;
}

const Section = ({ children, isLight, radius, neighborBg }: SectionProps) => {
  return (
    <section
      style={{ '--neighborBg': neighborBg }}
      className={cn(styles.section, {
        [styles.isLight]: isLight,
        [styles.isDark]: !isLight,
        [styles.radiusTop]: radius == 'top-left',
        [styles.radiusBottom]: radius == 'bottom-left',
      })}
    >
      <div style={{ margin: '0 auto', maxWidth: '1080px', padding: '0 20px', background: '' }}>{children}</div>
    </section>
  );
};

export default Section;
