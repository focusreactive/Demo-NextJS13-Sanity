import React, { ReactNode } from 'react';

import SectionHead from '../section/head/SectionHead';
import { styled } from '@linaria/react';
import { CustomLink } from '../custom-lInk/CustomLink';
import { converters } from '../../cms-connector/converters';

const StyledCustomersSection = styled.div`
  display: flex;
  align-items: flex-end;

  & > div:first-child {
    flex: 1;
  }

  & > div:nth-child(2) {
    flex: none;
    width: 34%;
    min-width: 190px;
    margin-top: 40px;
    position: relative;
    padding-bottom: calc((clamp(100px, 15vw, 147px) / 2.5));
    overflow: hidden;

    img {
      display: block;
      max-width: 100%;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: calc((clamp(100px, 15vw, 147px) / 2) * -1);
      right: 0;
      width: clamp(100px, 15vw, 147px);
      height: clamp(100px, 15vw, 147px);
      border-radius: 50%;
      background: #f2efed;
    }
  }

  @media screen and (max-width: 767px) {
    display: block;

    & > div:nth-child(2) {
      display: none;
    }
  }
`;

const StyledLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 0;
  margin: 0 -10px clamp(20px, 4vw, 40px);

  & > div {
    width: 25%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    justify-content: center;

    & > div {
      width: 33.33%;
    }
  }
  @media screen and (max-width: 480px) {
    gap: 15px 0;

    & > div {
      width: 50%;
      height: 50px;
    }
  }
`;

const StyledContent = styled.div`
  border-radius: 60px 60px 60px 0px;
  background: #ff473d;
  padding: 30px 50px;
  color: #fff;

  & > img {
    margin-top: 20px;
    max-width: 25%;
  }
  @media screen and (max-width: 1140px) {
    padding: 30px;
  }
  @media screen and (max-width: 575px) {
    margin-left: -10px;
    margin-right: -10px;
  }
`;

const StyledText = styled.div`
  font-size: 24px;

  p:not(:last-child) {
    margin-bottom: 25px;
  }

  p:nth-child(2) {
    font-size: 18px;
    line-height: 1.5;
  }
  @media screen and (max-width: 1140px) {
    font-size: 20px;
    p:nth-child(2) {
      font-size: 16px;
    }
  }
`;

const StyledImage = styled.div`
  display: none;
  width: 78px;
  margin-bottom: 15px;

  img {
    max-width: 100%;
    display: block;
  }

  @media screen and (max-width: 767px) {
    display: block;
    margin-left: -10px;
    margin-right: -10px;
  }
`;

type CustomerProps = {
  title: string;
  description: ReactNode;
  photo: { src: string; alt: string };
  logo: { src: string; alt: string };
  logoInText: { src: string; alt: string };
  author: string;
};

const Customer = ({ src, alt }: { src: string; alt: string }) => (
  <div>
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

type CustomersProps = {
  title: ReactNode;
  button: { title: string };
  items: CustomerProps[];
};

export const Customers = (props: CustomersProps) => {
  if (!props.items) return null;

  const selectedItem = props.items?.[0];

  if (!selectedItem) return null;

  return (
    <>
      <div>
        <SectionHead title={props.title} icon="https://i.ibb.co/fCKR73f/Group-407.png" />
        <StyledCustomersSection>
          <div>
            <StyledLogos>
              {props.items.map((item, index) => (
                <Customer key={index} src={selectedItem.logo?.src} alt={selectedItem.logo?.alt} />
              ))}
            </StyledLogos>

            <StyledContent>
              <StyledImage>
                <img src={selectedItem.photo?.src} alt={selectedItem.photo?.alt} loading="lazy" />
              </StyledImage>

              <StyledText>
                {selectedItem.description}

                <p>
                  <strong>{selectedItem.author}</strong>
                </p>
              </StyledText>

              <img src={selectedItem.logoInText?.src} alt={selectedItem.logoInText?.alt} loading="lazy" />
            </StyledContent>
          </div>

          <div>
            <img src={selectedItem.photo?.src} alt={selectedItem.photo?.alt} loading="lazy" />
          </div>
        </StyledCustomersSection>

        <CustomLink>{props.button?.title}</CustomLink>
      </div>
    </>
  );
};

export const CustomersPropsConverter = {
  sanity: (block: any) => {
    return {
      title: converters.title(block.title),
      button: converters.button(block.button),
      items: block.spotlight?.map?.((item: any) => ({
        title: converters.title(item.title),
        description: converters.richText(item.description),
        photo: converters.imageWithAlt(item.photo),
        logo: converters.imageWithAlt(item.logo),
        logoInText: converters.imageWithAlt(item.logoInText),
        author: converters.title(item.author),
      })),
    };
  },
};
