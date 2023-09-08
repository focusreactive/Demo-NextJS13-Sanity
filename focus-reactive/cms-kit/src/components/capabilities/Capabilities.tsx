import React from 'react';
import styles from './capabilities.module.scss';
import SectionHead from '../section/head/SectionHead';
import { Button } from '../button/Button';

export const Capabilities = () => {
  return (
    <div>
      <SectionHead title="Our <strong>capabilities.</strong>" icon="https://i.ibb.co/fCKR73f/Group-407.png" />

      <div className={styles.capabilities}>
        <div>
          <div style={{ '--color': '#4D62D6' }}>
            <img src="https://i.ibb.co/G5m44G0/Vector.png" alt="" />
            <h3>
              <strong>Universal ad fraud</strong> prevention
            </h3>
            <p>
              Trust TrafficGuard to stop invalid traffic in real time across the whole advertising journey. With our
              surgical fraud prevention, your budget is always protected helping you scale and grow with confidence.
              Protect any campaign type and all channels from one specialist solution.
            </p>
            <Button>Learn more</Button>
          </div>

          <div>
            <img src="https://i.ibb.co/XFqXynH/Sc1-1.png" alt="" />
          </div>
        </div>

        <div>
          <div style={{ '--color': '#1EB280' }}>
            <img src="https://i.ibb.co/G5m44G0/Vector.png" alt="" />
            <h3>
              <strong>Universal ad fraud</strong> prevention
            </h3>
            <p>
              Trust TrafficGuard to stop invalid traffic in real time across the whole advertising journey. With our
              surgical fraud prevention, your budget is always protected helping you scale and grow with confidence.
              Protect any campaign type and all channels from one specialist solution.
            </p>
            <Button>Learn more</Button>
          </div>

          <div>
            <img src="https://i.ibb.co/XFqXynH/Sc1-1.png" alt="" />
          </div>
        </div>

        <div>
          <div style={{ '--color': '#822E81' }}>
            <img src="https://i.ibb.co/G5m44G0/Vector.png" alt="" />
            <h3>
              <strong>Universal ad fraud</strong> prevention
            </h3>
            <p>
              Trust TrafficGuard to stop invalid traffic in real time across the whole advertising journey. With our
              surgical fraud prevention, your budget is always protected helping you scale and grow with confidence.
              Protect any campaign type and all channels from one specialist solution.
            </p>
            <Button>Learn more</Button>
          </div>

          <div>
            <img src="https://i.ibb.co/XFqXynH/Sc1-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
