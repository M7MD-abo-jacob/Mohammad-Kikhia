import { FaMapMarkedAlt } from 'react-icons/fa';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa6';

// all possiple languages that are written from right to left
// so that i don't need to modify much if i add a new language in the future
export const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ku', 'dv', 'az', 'arc'];
// supported languages in the app
export const languages = [
  { locale: 'ar', title: 'العربية', icon: 'https://flagcdn.com/w20/sy.png' },
  { locale: 'en', title: 'English', icon: 'https://flagcdn.com/w20/us.png' },
];
// default languages
export const defaultLng = 'en';

// regex for normal text
export const textRegex =
  /^[\p{L}\p{S}\p{P}\p{N}]+\s+[\p{L}\p{S}\p{P}\p{N}]+([\p{L}\p{S}\p{P}\p{N}\s]*)*$/u;
// regex for email addresses
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// sections of the app
export const sections = ['home', 'about', 'skills', 'projects', 'contact'];

// my contact methods
export const contactMethods = [
  {
    name: 'phone',
    title: '+963 938 912 156',
    href: 'tel:+963938912156',
    icon: FaPhone,
  },
  {
    name: 'email',
    title: 'm7md.master1@gmail.com',
    href: 'mailto:m7md.master1@gmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'location',
    title: 'Latakia, Syria',
    icon: FaMapMarkedAlt,
  },
];

// my social media links
export const socials = [
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
