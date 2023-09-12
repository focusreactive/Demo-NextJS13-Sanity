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

const Sponsor = () => (
  <div>
    <img src="https://i.ibb.co/K26gVnJ/Group-165.png" alt="" />
  </div>
);

export const Sponsors = () => {
  return (
    <StyledSponsors>
      <div>
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
        <Sponsor />
      </div>

      <CustomLink>Meet our Customers</CustomLink>
    </StyledSponsors>
  );
};
