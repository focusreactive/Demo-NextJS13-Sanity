import React from 'react';

import { styled } from '@linaria/react';
import { CustomLink } from '../custom-lInk/CustomLink';
import { converters } from '../../cms-connector/converters';

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

type Logo = { src: string; alt: string };

const Sponsor = ({ src, alt }: Logo) => (
  <div>
    <img src={src} alt={alt} />
  </div>
);

type SponsorsProps = {
  logos: Logo[];
  button: {
    title: string;
    link: string;
  };
};

export const Sponsors = ({ logos, button }: SponsorsProps) => {
  return (
    <StyledSponsors>
      <div>
        {logos?.map?.((logo, index) => (
          <Sponsor key={index} {...logo} />
        ))}
      </div>

      <CustomLink>{button?.title}</CustomLink>
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
