import { SiFacebook, SiInstagram, SiSnapchat, SiTwitter, SiYoutube } from 'react-icons/si';

export const brandColors = [
  { title: 'black', value: '#333333' },
  { title: 'white', value: '#F8F9FB' },
  { title: 'gray100', value: '#F2EFED' },
  { title: 'gray400', value: '#B2B2B2' },
  { title: 'blue100', value: '#97A7FF' },
  { title: 'blue400', value: '#4D62D6' },
  { title: 'blue700', value: '#323F8A' },
  { title: 'yellow100', value: '#FFC766' },
  { title: 'yellow400', value: '#FFA300' },
  { title: 'green100', value: '#80CDB6' },
  { title: 'green400', value: '#1EB280' },
  { title: 'red100', value: '#FF9DA1' },
  { title: 'red400', value: '#F0484F' },
  { title: 'violet100', value: '#B690B5' },
  { title: 'violet400', value: '#822E81' },
];

export const colorOptions = brandColors.map((colorData) => ({
  value: colorData.title,
  title: colorData.title,
}));

export const commonSocialsList = [
  { title: 'Twitter', value: 'twitter', icon: SiTwitter },
  { title: 'Instagram', value: 'instagram', icon: SiInstagram },
  { title: 'Facebook', value: 'facebook', icon: SiFacebook },
  { title: 'Youtube', value: 'youtube', icon: SiYoutube },
  { title: 'LinkedIn', value: 'linkedin', icon: SiSnapchat },
];

export const sizeOptions = [
  { title: 'Small', value: 'small' },
  { title: 'Default', value: 'default' },
  { title: 'Large', value: 'large' },
];

export const LOCALIZATION_PREFIX = '__i18n_';
