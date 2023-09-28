import React, { ReactNode } from 'react';
import SectionHead from '../section/head/SectionHead';
import { Button } from '../button/Button';
import { styled } from '@linaria/react';
import { brandColors } from '@focusreactive/cms-kit/src/components/capabilities/colors';
import { converters } from '../../cms-connector/converters';

const StyledCapabilities = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 6.6vw, 80px) 0;

  &:after {
    content: '';
    position: absolute;
    bottom: calc((clamp(140px, 27vw, 500px) / 2) * -1);
    right: calc(clamp(10px, 3vw, 40px) * -1);
    width: clamp(140px, 27vw, 500px);
    height: clamp(140px, 27vw, 500px);
    border-radius: 50%;
    background: #4d62d6;
  }
`;

const StyledCapability = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;

  & > div:first-child {
    width: 58%;
    border-radius: 20px;
    background: ${({ color }) => (color ? color : '#4d62d6')};
    padding: clamp(20px, 5vw, 50px);
    padding-right: clamp(120px, 17vw, 200px);
    flex: none;

    img {
      display: inline-block;
      vertical-align: middle;
      max-width: clamp(20px, 3vw, 30px);
      margin-bottom: 20px;
    }

    h3 {
      font-size: clamp(25px, 3.3vw, 34px);
      font-weight: 400;
      line-height: 1.3;
      margin-bottom: clamp(20px, 4vw, 40px);
    }

    p {
      font-size: clamp(16px, 2vw, 18px);
      line-height: 1.45;

      &:not(:last-child) {
        margin-bottom: 25px;
      }
    }

    button {
      color: ${({ color }) => (color ? color : '#4d62d6')};
      margin-top: clamp(10px, 2vw, 20px);

      &:hover {
        color: #fff;
        background: ${({ color }) => (color ? color : '#4d62d6')};
      }
    }
  }

  & > div:nth-child(2) {
    position: relative;
    z-index: 1;
    flex: none;
    max-width: calc(43% + clamp(80px, 14vw, 160px));
    margin-left: calc(clamp(80px, 14vw, 160px) * -1);
    display: flex;
    justify-content: flex-start;

    img {
      display: block;
      max-width: 100%;
      border-radius: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
      & > div:first-child {
        padding-right: clamp(20px, 5vw, 50px);
        padding-left: clamp(120px, 17vw, 200px);
      }
      & > div:nth-child(2) {
        margin-left: 0;
        margin-right: calc(clamp(80px, 14vw, 160px) * -1);
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    & > div:first-child {
      order: 1;
      width: 100%;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: -25px;
      padding-top: 50px;
      padding: 50px 20px 20px;
    }
    & > div:nth-child(2) {
      max-width: none;
      width: 100%;
      margin: 0;
      img {
        width: 100%;
      }
    }
  }
`;

type CapabilityProps = {
  title: ReactNode;
  description: ReactNode;
  button: {
    title: string;
  };
  bgColor?: string;
};

const Capability = ({ title, description, button, bgColor }: CapabilityProps) => (
  <StyledCapability color={brandColors[bgColor as keyof typeof brandColors]}>
    <div>
      <img src="https://i.ibb.co/G5m44G0/Vector.png" alt="" />

      <h3>{title}</h3>

      {description}

      <Button>{button.title}</Button>
    </div>

    <div>
      <img src="https://i.ibb.co/XFqXynH/Sc1-1.png" alt="" />
    </div>
  </StyledCapability>
);

type CapabilitiesProps = {
  title: ReactNode;
  list: CapabilityProps[];
};

export const Capabilities = (props: CapabilitiesProps) => {
  return (
    <div>
      <SectionHead title={props.title} icon="https://i.ibb.co/fCKR73f/Group-407.png" />
      <StyledCapabilities>
        {props.list.map((item, index) => (
          <Capability key={index} {...item} />
        ))}
      </StyledCapabilities>
    </div>
  );
};

export const CapabilitiesPropsConverter = {
  sanity: (block: any) => {
    return {
      title: converters.title(block.title),
      list: block.list.map((item: any) => ({
        title: converters.title(item.title),
        description: converters.richText(item.description),
        button: converters.button(item.button),
        bgColor: converters.plainText(item.bgColor),
      })),
    };
  },
};
