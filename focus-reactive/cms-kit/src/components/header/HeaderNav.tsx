import { styled } from '@linaria/react';
import React from 'react';
import Buttons from '../common/buttons/Buttons';
import ImageBlock from '../common/image-block/ImageBlock';
import FloatUp from '../common/float-up/FloatUp';
import SmartLink from '../common/smart-link/SmartLink';
import TitleBlock from '../common/title-block/TitleBlock';
import { appTheme } from '../../theme';
import DescriptionBlock from '../common/description-block/DescriptionBlock';
import { StyledContainer } from '../section/Section';

const NavBox = styled.div`
  animation: fadeIn linear 0.4s forwards alternate;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  background: ${appTheme.colors.white};
  color: ${appTheme.colors.black};

  ${appTheme.media.lg} {
    display: block;
  }

  #nav-container {
    position: relative;
    padding: 20px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    display: flex;
  }
`;

const DecorImg = styled.svg`
  z-index: 1;
  position: absolute;
  right: calc(100% - 20px);
  bottom: 0;
  width: 264px;
  height: 191px;
`;

const NavList = styled.div`
  display: flex;
  flex: 1 1 auto;
  margin-left: -30px;
  flex-wrap: wrap;
`;

const NavTitle = styled(TitleBlock)`
  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.32;
    margin-bottom: 28px;
  }

  ${appTheme.media.md} {
    max-width: 120px;
  }
`;

const NavDescription = styled(DescriptionBlock)`
  font-size: 14px;
  line-height: 1.32;
`;

const NavItemWrap = styled(SmartLink)`
  display: block;
  padding: 16px 20px 20px 30px;
  min-height: 200px;
  flex: 1 1 auto;
  max-width: 25%;
  color: ${appTheme.colors.black};
  background: ${appTheme.colors.white};
  transition: all ease 0.2s;
  box-sizing: border-box;
  align-self: flex-start;
  min-width: 167px;

  &:hover {
    ${NavTitle} {
      text-decoration: underline;
    }
  }

  figure {
    position: relative;
    width: 25px;
    height: 25px;
    margin-bottom: 24px;

    img {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: auto;
    }
  }
`;

const NavItemColsWrap = styled.div`
  width: calc(50% - 10px);
  margin-left: 10px;
  position: relative;
  min-width: calc(33.3% - 10px);
  flex: 1;

  &:first-child {
    &:before {
      content: '';
      position: absolute;
      left: -1000px;
      top: -28px;
      right: -8px;
      bottom: 0;
      background: ${appTheme.colors.gray100};
      border-radius: 0 160px 0 0;
    }
  }

  h3 {
    position: relative;
    font-weight: 400;
    font-size: 26px;
    color: ${appTheme.colors.gray400};
    margin: 5px 0 15px 20px;
  }
`;

const NavItemColsList = styled(SmartLink)`
  display: block;
  position: relative;
  padding: 10px 33px 10px 74px;
  flex: 1 1 auto;
  color: ${appTheme.colors.black};
  /* background: ${appTheme.colors.white}; */
  transition: all ease 0.2s;
  box-sizing: border-box;

  &:hover {
    ${NavTitle} {
      text-decoration: underline;
    }
  }

  /* &:hover {
    background: ${appTheme.colors.gray100};
  } */

  figure {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 22px;

    img {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: auto;
    }
  }

  ${NavTitle} {
    .title {
      margin-bottom: 0;
    }
  }

  ${NavDescription} {
    min-height: 36px;
  }
`;

const PromoWrap = styled.div`
  flex: 0 0 236px;
  display: flex;
  flex-direction: column;
  background-color: ${appTheme.colors.gray100};
  color: ${appTheme.colors.black};
  border-radius: 20px 20px 20px 0;
  overflow: hidden;
  margin: 0 0 110px auto;
  align-self: flex-start;

  figure {
    padding: 0;
    margin: 0;
    height: 120px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PromoContent = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  padding: 25px 25px 25px;
`;

const Description = styled.div`
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 1.56;
  color: ${appTheme.colors.black};
`;

const Decor = () => {
  return (
    <DecorImg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 190.5">
      <path
        d="M168 190.5c0-11-2.2-21.8-6.4-32a83.47 83.47 0 00-45.5-45.2C106 109.2 95 107 84 107s-22 2.2-32.1 6.4A83.47 83.47 0 000 190.6h168z"
        fill="#1eb280"
      />
      <path fill="#ffa300" d="M159.89 154.82l35.36-68.74L264 121.45l-35.37 68.73z" />
      <path
        d="M141.5 119C108.7 119 82 92.3 82 59.5S108.7 0 141.5 0 201 26.7 201 59.5 174.3 119 141.5 119zm0-79c-10.8 0-19.5 8.7-19.5 19.5S130.7 79 141.5 79 161 70.3 161 59.5 152.3 40 141.5 40z"
        fill="#323f8a"
      />
    </DecorImg>
  );
};

const Promo = ({ image, title, buttons }: any) => {
  return (
    <PromoWrap>
      <FloatUp>
        <ImageBlock image={image} />
        <PromoContent>
          <Description>{title}</Description>
          <Buttons buttons={buttons} />
        </PromoContent>
      </FloatUp>
    </PromoWrap>
  );
};

const NavItem = ({ links, ...restProps }: any) => {
  return (links || []).map((item: any, key: any) => {
    const { title, description, ...rest } = item;

    return (
      <NavItemWrap key={key.iconAlt} {...restProps} {...rest}>
        <ImageBlock image={item.imageWithAlt} />
        <NavTitle text={title} />
        <NavDescription text={description} color="gray700" />
      </NavItemWrap>
    );
  });
};

const NavItemCols = ({ navTitle, links, mainKey, ...restProps }: any) => {
  return (
    <NavItemColsWrap>
      <h3>{navTitle}</h3>
      {(links || []).map((item: any, key: any) => {
        const { title, description, ...rest } = item;

        return (
          <NavItemColsList key={key} {...restProps} {...rest}>
            <ImageBlock image={item.imageWithAlt} />
            <NavTitle text={title} />
            <NavDescription text={description} color="gray700" />
          </NavItemColsList>
        );
      })}
    </NavItemColsWrap>
  );
};

const HeaderNav = ({ className, promo, navigation }: any) => {
  return (
    <NavBox className={className}>
      <StyledContainer id="nav-container">
        <Decor />
        <NavList>
          {navigation?.length === 1
            ? (navigation || []).map((item: any, key: any) => <NavItem {...item} key={`${key}|||${Math.random()}`} />)
            : (navigation || []).map((item: any, key: any) => (
                <NavItemCols {...item} key={`${key}|||${item.iconSrc}`} mainKey={key} />
              ))}
        </NavList>
        {promo ? <Promo {...promo} /> : null}
      </StyledContainer>
    </NavBox>
  );
};

export default HeaderNav;
