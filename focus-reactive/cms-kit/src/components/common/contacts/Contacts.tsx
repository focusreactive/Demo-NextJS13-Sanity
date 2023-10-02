import { styled } from '@linaria/react';
import React from 'react';
import { appTheme } from '../../../theme';
import CountrySwitchWrapper from './CountrySwitchWrapper';

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

const ContactImage = styled.img`
  width: 16px;
  height: 16px;
`;

const ContactsItemWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${appTheme.colors.blue100};

  &:not(:first-child) {
    margin: 15px 0 0;
  }

  img {
    width: 16px;
    height: 16px;
    margin: 0 12px 0 0;
    fill: ${appTheme.colors.blue400};
  }
`;

const ContactsItem = ({ icon, title }: any) => {
  return (
    <ContactsItemWrap>
      <ContactImage loading="lazy" src={icon} alt={title} />
      {title}
    </ContactsItemWrap>
  );
};

const Contacts = (props: any) => {
  const { contacts } = props;

  return (
    <ContactsWrap>
      {(contacts || []).map((item: any, key: any) => (
        <CountrySwitchWrapper key={key}>
          <ContactsItem {...item} />
        </CountrySwitchWrapper>
      ))}
      <CountrySwitchWrapper>
        <ContactsItem
          title="English"
          icon="https://cdn.sanity.io/images/yaj9i7i6/production/b669cd88ded5c8362e9f7b099de5b6f984bbf9af-16x17.svg"
        />
      </CountrySwitchWrapper>
    </ContactsWrap>
  );
};

export default Contacts;
