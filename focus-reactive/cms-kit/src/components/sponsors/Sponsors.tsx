import React from 'react';
import { styled } from '@linaria/react';
import { converters } from '../../cms-connector/converters';
import Buttons from '../common/buttons/Buttons';
import { ImageWithAlt } from '@focusreactive/cms-kit';

const StyledSponsors = styled.div`
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 0;
    margin: 0 -10px;

    & > div {
      width: 24%;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
    }
  }
  img {
    max-width: 140px;
    max-height: 100%;
    display: block;
    border: none;
  }

  @media screen and (max-width: 1140px) {
    & > div > div {
      width: 25%;
      height: 70px;
    }
    img {
      max-width: 120px;
    }
  }

  @media screen and (max-width: 767px) {
    & > div > div {
      width: 33.33%;
    }
  }

  @media screen and (max-width: 480px) {
    & > div > div {
      width: 50%;
      height: 60px;
    }
    img {
      max-width: 100px;
    }
  }
`;

const Sponsor = ({ src, alt }: ImageWithAlt) => (
  <div>
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

type SponsorsProps = {
  logos: ImageWithAlt[];
  button: {
    title: string;
    link: string;
  };
};

export const Sponsors = ({ logos, button }: SponsorsProps) => {
  return (
    <StyledSponsors>
      <div>{logos?.map?.((logo, index) => <Sponsor key={index} {...logo} />)}</div>

      <Buttons
        buttons={[{ link: 'https://www.trafficguard.ai/', text: button?.title, hasIcon: true, variant: 'white' }]}
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
