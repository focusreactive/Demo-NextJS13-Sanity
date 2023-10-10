import React from 'react';
import { styled } from '@linaria/react';
import { converters } from '../../cms-connector/converters';
import Buttons from '../common/buttons/Buttons';
import Image from 'next/image';
import { ButtonOrLink, ImageWithAlt } from '../../global';

const StyledSponsors = styled.div`
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin: 0 -10px;
  }
`;

const StyledImage = styled.div`
  position: relative;
  width: 24%;
  height: 80px;
  margin: 0 47px;
  max-width: 140px;

  @media screen and (max-width: 1140px) {
    width: 25%;
    height: 70px;
    max-width: 120px;
  }

  @media screen and (max-width: 767px) {
    width: 33.33%;
  }

  @media screen and (max-width: 480px) {
    width: 50%;
    height: 60px;
    max-width: 100px;
  }
`;

const Sponsor = ({ src, alt }: ImageWithAlt) => {
  return (
    <StyledImage>
      <Image src={src} alt={alt} fill sizes="140px" objectFit="contain" quality={50} />
    </StyledImage>
  );
};

type SponsorsProps = {
  logos: ImageWithAlt[];
  button: ButtonOrLink;
};

export const Sponsors = ({ logos, button }: SponsorsProps) => {
  return (
    <StyledSponsors>
      <div>{logos?.map?.((logo, index) => <Sponsor key={index} {...logo} />)}</div>

      <Buttons
        buttons={[{ link: 'https://www.trafficguard.ai/', text: button?.text, hasIcon: true, variant: 'white' }]}
      />
    </StyledSponsors>
  );
};

export const SponsorsPropsConverter = {
  sanity: (block: any) => {
    return {
      logos: block.logos?.map?.((logo: any) => converters.imageWithAlt(logo.imageWithAlt)),
      button: converters.button(block.button),
    };
  },
};
