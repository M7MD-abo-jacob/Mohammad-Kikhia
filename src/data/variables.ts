import { FaMapMarkedAlt } from 'react-icons/fa';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa6';

export const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ku', 'dv', 'az', 'arc'];
export const languages = [
  { locale: 'ar', title: 'العربية', icon: 'https://flagcdn.com/w20/sy.png' },
  { locale: 'en', title: 'English', icon: 'https://flagcdn.com/w20/us.png' },
];
export const defaultLng = 'en';

export const textRegex =
  /^[\p{L}\p{S}\p{P}\p{N}]+\s+[\p{L}\p{S}\p{P}\p{N}]+([\p{L}\p{S}\p{P}\p{N}\s]*)*$/u;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const sections = ['home', 'about', 'skills', 'projects', 'contact'];

export const contactMethods = [
  {
    title: '+963 938 912 156',
    href: 'tel:+963938912156',
    icon: FaPhone,
  },
  {
    title: 'm7md.master1@gmail.com',
    href: 'mailto:m7md.master1@gmail.com',
    icon: FaEnvelope,
  },
  {
    title: 'Latakia, Syria',
    icon: FaMapMarkedAlt,
  },
];

export const socials = [
  // {
  //   title: 'Mail',
  //   href: 'mailto:m7md.master1@gmail.com',
  //   icon: <FaEnvelope />,
  // },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammad-kikhia',
    icon: FaLinkedin,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/M7MD-abo-jacob/',
    icon: FaGithub,
  },
  {
    title: 'Telegram',
    href: 'https://t.me/M7MD_kikhia',
    icon: FaTelegram,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/m7md.abo_jacob/',
    icon: FaInstagram,
  },
];
