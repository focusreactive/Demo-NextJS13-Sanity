import React from 'react';
import { styled } from '@linaria/react';
import { ImageWithAlt, converters } from '../../cms-connector/converters';
import Buttons from '../common/buttons/Buttons';
import Image from 'next/image';
import { ButtonOrLink } from '../../global';

const StyledSponsors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledImage = styled.div`
  position: relative;
  width: 24%;
  height: 80px;
  margin: 0 40px;
  max-width: 140px;

  @media screen and (max-width: 1140px) {
    width: 25%;
    height: 70px;
    max-width: 120px;
  }

  @media screen and (max-width: 767px) {
    width: 33.33%;
    margin: 0 20px;
  }

  @media screen and (max-width: 480px) {
    width: 33%;
    height: 60px;
    max-width: 100px;
    margin: 0;
  }
`;

const StyledLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-evenly;
`;

const Sponsor = ({ image }: { image: ImageWithAlt }) => {
  return (
    <StyledImage>
      <Image src={image?.src ?? ''} alt={image?.alt} fill sizes="140px" objectFit="contain" quality={50} />
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
      <StyledLogos>{logos?.map?.((logo, index) => <Sponsor key={index} image={logo} />)}</StyledLogos>

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
