import React from 'react';
import styles from './customers.module.scss';
import { CustomLink } from '../customLInk/CustomLink';
import SectionHead from '../section/head/SectionHead';

export const Customers = () => {
  return (
    <div>
      <SectionHead title="Customers spotlight" icon="https://i.ibb.co/fCKR73f/Group-407.png" />
      <div className={styles.section}>
        <div>
          <div className={styles.logos}>
            <div>
              <img src="https://i.ibb.co/K26gVnJ/Group-165.png" alt="" />
            </div>
            <div>
              <img src="https://i.ibb.co/K26gVnJ/Group-165.png" alt="" />
            </div>
            <div>
              <img src="https://i.ibb.co/K26gVnJ/Group-165.png" alt="" />
            </div>
            <div>
              <img src="https://i.ibb.co/K26gVnJ/Group-165.png" alt="" />
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.img}>
              <img src="https://i.ibb.co/tpL1QNj/Mask-Group.png" alt="" />
            </div>
            <div className={styles.text}>
              <p>
                “By having cleaner traffic, we could find reliable sources and allocate budget better, putting money
                where it is really bringing results. Having a fraud prevention solution is a must for any growth
                professional. TrafficGuard is a key partner to helping us achieve our results..”
              </p>
              <p>
                <strong>Gabriel Sampaio, Grow lead-Digital Channel, Rappi</strong>
              </p>
            </div>

            <img src="https://i.ibb.co/J3qgrM7/Group-165.png" alt="" />
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/tpL1QNj/Mask-Group.png" alt="" />
        </div>
      </div>
      <CustomLink>Check the Case Study</CustomLink>
    </div>
  );
};
