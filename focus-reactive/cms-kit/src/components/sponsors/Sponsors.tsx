import React from 'react';
import { CustomLink } from '../customLInk/CustomLink';
import { styled } from '@linaria/react';

const StyledSponsors = styled.div`
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 0;
    margin: 0 -10px;

    & > div {
      width: 20%;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    border: none;
  }

  @media screen and (max-width: 1024px) {
    & > div > div {
      width: 25%;
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
        {logos.map((logo, index) => (
          <Sponsor key={index} {...logo} />
        ))}
      </div>

      <CustomLink>{button.title}</CustomLink>
    </StyledSponsors>
  );
};
