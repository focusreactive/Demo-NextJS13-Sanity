import { createTheming } from '@callstack/react-theme-provider';

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 1140,
};

export const media = {
  sm: `@media screen and (min-width: ${breakpoints.sm}px)`,
  md: `@media screen and (min-width: ${breakpoints.md}px)`,
  lg: `@media screen and (min-width: ${breakpoints.lg}px)`,
};

export const appTheme = {
  colors: {
    currentColor: 'currentColor',
    transparent: 'transparent',
    black: '#333333',
    white: '#FFFFFF',
    white400: '#F8F9FB',
    gray100: '#F2EFED',
    gray200: '#DEDAD8',
    gray400: '#B2B2B2',
    gray700: '#999999',
    blue100: '#ffa300',
    blue400: '#32408B',
    blue700: '#393939',
    yellow100: '#FFC766',
    yellow400: '#FFA300',
    green100: '#80CDB6',
    green400: '#1EB280',
    red100: '#FF9DA1',
    red400: '#F0484F',
    violet100: '#B690B5',
    violet400: '#822E81',
  },
  media,
  breakpoints,
};

// const theming = createTheming(appTheme);

export type Theme = typeof appTheme;

// export const ThemeProvider = ({ children, theme = appTheme }: React.PropsWithChildren<{ theme?: Theme }>) => (
//   <theming.ThemeProvider theme={theme}>{children}</theming.ThemeProvider>
// );

// type ThemeCallback<T> = (tm: T) => string;

// export const tm = (cb: ThemeCallback<Theme>) => () => ((fn) => fn(theming.useTheme()))(cb);
