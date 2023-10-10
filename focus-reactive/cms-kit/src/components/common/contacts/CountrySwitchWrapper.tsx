import React from 'react';
import { styled } from '@linaria/react';
// import { appTheme } from '../../../theme';

const Container = styled.div`
  position: relative;
  display: flex;
`;

// const CountriesContainer = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 25%;

//   padding: 8px 12px;
//   border-radius: 4px;

//   background-color: ${appTheme.colors.white};
// `;

// const Language = styled.div`
//   display: flex;
//   color: ${appTheme.colors.black};
//   cursor: pointer;

//   margin: 4px 0;
// `;

const CountrySwitchWrapper = ({ children }: any) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const countries = [{ code: 'gb', name: 'United Kingdom' }];

  // const changeActiveLang = (code: string) => () => {
  //   setIsOpen(false);
  // };

  return (
    <Container>
      <Container
      // onClick={() => {
      //   setIsOpen(true);
      // }}
      >
        {children}
      </Container>
      {/* {isOpen ? (
        <CountriesContainer>
          {countries.map((lang: any) => (
            <Language onClick={changeActiveLang(lang.code)}>{lang.name}</Language>
          ))}
        </CountriesContainer>
      ) : null} */}
    </Container>
  );
};

export default CountrySwitchWrapper;
