import { styled } from '@linaria/react';
import React from 'react';
import { appTheme } from '../../../theme';
import CountrySwitchWrapper from './CountrySwitchWrapper';
import Image from 'next/image';
import globe from '../../../assets/globe.svg';
import location from '../../../assets/location.svg';

const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style: none;
  margin: 20px 0;
  font-size: 16px;
  line-height: 1.28;

  & > :not(:first-child) {
    margin-top: 16px;
  }
`;

const ContactImage = styled.img<{ width?: number }>`
  width: ${({ width }) => (width ? width : 16)}px;
  height: 16px;
`;

const ContactsItemWrap = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  color: ${({ color }) => (color ? color : appTheme.colors.white)};

  &:not(:first-child) {
    margin: 15px 0 0;
  }

  img {
    margin: 0 12px 0 0;
    fill: ${appTheme.colors.blue400};
  }
`;

const ContactsItem = ({ icon, title, color }: any) => {
  return (
    <ContactsItemWrap color={color}>
      <Image src={icon} alt={title} />

      {title}
    </ContactsItemWrap>
  );
};

const Contacts = (props: any) => {
  const { contacts, color } = props;

  return (
    <ContactsWrap>
      {(contacts || []).map((item: any, key: any) => (
        <CountrySwitchWrapper key={key}>
          <ContactsItem {...item} color={color} icon={location} />
        </CountrySwitchWrapper>
      ))}
      <CountrySwitchWrapper>
        <ContactsItem title="English" icon={globe} color={color} />
      </CountrySwitchWrapper>
    </ContactsWrap>
  );
};

export default Contacts;
