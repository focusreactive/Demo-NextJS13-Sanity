import React from 'react';
import SectionHead from '../section/head/SectionHead';
import { styled } from '@linaria/react';
interface AdvertiseProps {
  positionImg?: string;
}

const StyledAdvertise = styled.div<{ imageLeft?: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: 50px 30px;

  p {
    font-size: clamp(16px, 2vw, 18px);
    line-height: 1.5;
    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  & > div:first-child {
    flex: 1;
  }

  & > div:nth-child(2) {
    flex: none;
    margin-bottom: calc(clamp(80px, 15vw, 160px) * -1);
    max-width: 45%;

    img {
      width: 100%;
      max-width: 450px;
      display: block;
    }
  }

  @media screen and (min-width: 601px) {
    flex-direction: ${({ imageLeft }) => (imageLeft ? 'row-reverse' : 'row')};
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    & > div:nth-child(2) {
      margin-left: auto;
      max-width: 80%;
      margin-right: -40px;
    }
  }
`;

export const Advertise = ({ positionImg = 'right' }: AdvertiseProps) => {
  return (
    <StyledAdvertise imageLeft={positionImg === 'left'}>
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
    </StyledAdvertise>
  );
};
