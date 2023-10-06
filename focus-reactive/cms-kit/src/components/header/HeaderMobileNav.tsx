import React from 'react';

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { styled } from '@linaria/react';
import Logo from '../common/logo/Logo';
import { appTheme } from '../../theme';
import SmartLink from '../common/smart-link/SmartLink';
import Buttons from '../common/buttons/Buttons';
import ImageBlock from '../common/image-block/ImageBlock';
import Contacts from '../common/contacts/Contacts';

import { RichText } from '@/components/RichText';

const IconArrow = styled.svg`
  position: relative;
  width: 21px;
  height: 12px;
  z-index: 1;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  width: 128px;
  flex: 0 0 auto;
  position: absolute;
  top: 10px;
  left: 20px;

  ${appTheme.media.sm} {
    display: none;
  }
`;

const Hamburger = styled.button`
  position: absolute;
  right: 14px;
  top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background: transparent;

  ${appTheme.media.sm} {
    ${IconArrow} {
      transform: rotate(90deg);
    }
    left: 14px;
    right: auto;
  }

  ${appTheme.media.md} {
    top: 30px;
    width: 40px;
    height: 40px;
  }

  ${appTheme.media.lg} {
    display: none;
  }

  &:hover {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 12;
  visibility: hidden;
  opacity: 0;
  transition: opacity ease 0.3s;

  &[data-is-open='true'] {
    visibility: visible;
    opacity: 1;

    ${appTheme.media.lg} {
      visibility: hidden;
      opacity: 0;
    }
  }
`;

const MobileNav = styled.div`
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  min-height: var(--app-height);
  max-height: var(--app-height);
  box-sizing: border-box;
  background: ${appTheme.colors.white};
  display: flex;
  flex-direction: column;
  padding-top: 56px;
  z-index: 12;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transform: translate(0, -100%);
  transition: all ease 0.3s;
  opacity: 0;

  &[data-is-open='true'] {
    transform: translate(0, 0);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    opacity: 1;
  }

  ${appTheme.media.sm} {
    left: auto;
    width: 300px;
    transform: translate(100%, 0);

    &[data-is-open='true'] {
      transform: translate(0, 0);
    }
  }

  ${appTheme.media.md} {
    padding-top: 100px;
  }

  ${appTheme.media.lg} {
    display: none;
  }
`;

const Menu = styled.div``;

const MenuGroup = styled.div`
  &:not(:first-child) {
    border-top: 2px solid ${appTheme.colors.gray100};
  }
`;

const GroupTitle = styled.div`
  font-weight: 500;
  color: ${appTheme.colors.blue700};
  padding: 12px 18px 11px;
  cursor: pointer;
`;

const MenuList = styled.div`
  background: ${appTheme.colors.gray100};
  &[data-open='true'] {
    display: block;
  }

  &[data-open='false'] {
    display: none;
  }
`;

const MenuItem = styled(SmartLink)`
  color: ${appTheme.colors.black};
  display: block;
  position: relative;
  padding: 13px 20px 13px 54px;
  font-weight: 500;
  transition: all ease 0.05s;

  &:hover {
    background: ${appTheme.colors.gray200};
  }

  figure {
    position: absolute;
    top: 11px;
    left: 18px;
    width: 22px;
    height: 22px;

    img {
      position: absolute;
      left: 0;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const MenuText = styled.div`
  display: block;
`;

const Bottom = styled.div`
  margin: auto 0 0;
  padding: 20px 20px 40px;
`;

const Arrow = ({ onClick }: any) => {
  return (
    <IconArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 11.5" onClick={onClick}>
      <path
        d="M1 10.5L10.5 1l9.5 9.5"
        fill="none"
        stroke="#323f8a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconArrow>
  );
};

const HeaderNavMobile = (props: any) => {
  const { menu, buttons, contacts, isOpen, onClose, bgColor } = props;

  React.useEffect(() => {
    const element = document.getElementById('mobile-nav');

    if (element) {
      if (isOpen) {
        disableBodyScroll(element);
      } else {
        enableBodyScroll(element);
      }
    }

    return clearAllBodyScrollLocks;
  }, [isOpen]);

  const [openedId, setOpenedId] = React.useState([]);
  const onItemClick = (id: any) => () => {
    setOpenedId(id);
  };

  return (
    <>
      <Overlay data-is-open={isOpen} />
      <MobileNav data-is-open={isOpen} id="mobile-nav">
        <LogoLink href={'/'}>
          <Logo bgColor="white" />
        </LogoLink>
        <Hamburger onClick={onClose}>
          <Arrow />
        </Hamburger>
        <Menu>
          {(menu || []).map((item: any, key: any) => (
            <MenuGroup key={key}>
              <GroupTitle onClick={onItemClick(key)}>{item.documentTitle}</GroupTitle>
              <MenuList data-open={openedId === key ? 'true' : 'false'}>
                {(item.links || []).map((link: any, linkKey: any) => {
                  const { iconSrc, iconAlt, title, link: href } = link;
                  return (
                    <MenuItem key={linkKey} link={href} onClick={onClose}>
                      <ImageBlock src={iconSrc} alt={iconAlt} />
                      <MenuText>
                        <RichText value={title} />
                      </MenuText>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </MenuGroup>
          ))}
        </Menu>

        <Bottom>
          <Contacts contacts={contacts} />
          <Buttons buttons={buttons} />
        </Bottom>
      </MobileNav>
    </>
  );
};

export default HeaderNavMobile;
