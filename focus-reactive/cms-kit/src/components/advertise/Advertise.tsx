import React from 'react';
import styles from './advertise.module.scss';
import SectionHead from '../section/head/SectionHead';

export const Advertise = () => {
  return (
    <div className={styles.advertise}>
      <div>
        <SectionHead
          title="Advertise and grow with <strong>confidence.</strong>"
          icon="https://i.ibb.co/fCKR73f/Group-407.png"
        />

        <p>We believe the best advertising performance comes from decisions based on accurate data.</p>
        <p>
          With complete trust and confidence in the data you use to drive performance, you can act faster and be bolder
          to get the best results.
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co/dmgrk4h/Component-1.png" alt="" />
      </div>
    </div>
  );
};
