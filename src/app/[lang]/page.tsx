import Link from 'next/link';
import Image from 'next/image';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/getDictionary';
import { trans } from '@/lib/trans';
import { socials } from '@/data/variables';
import TypeAnimation from '@/components/shared/TypeAnimation';
import ShootingStars from '@/components/sections/home/stars/ShootingStars';
import { Viewport } from 'next';

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang, ['home']);
  return (
    <>
      <section className="home" id="home">
        <div className="width-container">
          {/* ---------- STARS ---------- */}
          <ShootingStars />
          {/* ---------- HERO CONTENT ---------- */}
          <div className="content">
            <h2 data-aos="zoom-in">
              {trans(dictionary.home.hero.title, {
                span: <span />,
              })}
            </h2>
            <p data-aos="zoom-in">
              {dictionary.home.hero.subtitle}
              &nbsp;
              <TypeAnimation
                className="typing-text"
                sequence={dictionary.home.hero.subtext}
                wrapper="span"
                cursor={true}
              />
            </p>
            <Link
              className="btn"
              href="#about"
              data-aos="zoom-in"
              data-aos-offset="0">
              <span>{dictionary.home.common.nav.about}</span>
              <FaArrowAltCircleDown />
            </Link>
            <div className="socials">
              <ul className="social-icons">
                {socials.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay={i * 150}
                      data-aos-offset="0"
                      key={item.title}>
                      <a
                        key={item.title}
                        href={item.href}
                        aria-label={item.title}
                        target="_blank">
                        <Icon />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* ---------- BLOB IMAGE ---------- */}
          <div className="image" data-aos="zoom-in">
            <Image
              src="/assets/img/me1.jpg"
              alt="sss"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}

// META DATA
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export async function generateMetadata(req: any) {
  const lang = req?.params?.lang;
  const dictionary = await getDictionary(lang, ['home']);
  const metaData = dictionary.home.common.metadata;
  return {
    title: metaData.title,
    description: metaData.description,
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        notranslate: true,
        'max-image-preview': 'large',
      },
    },
    applicationName: metaData.title,
    keywords: [
      'Mohammad Kikhia',
      'Frontend Developer',
      'ReactJS',
      'NextJS',
      'Web Development',
      'JavaScript',
      'HTML',
      'CSS',
      'Syria',
      'Latakia',
      'Lattakia',
      'User Interface',
      'User Experience',
      'UI',
      'UX',
      'Responsive Design',
      'Version Control',
      'Git',
      'GitHub',
      'Node.js',
      'npm',
      'Webpack',
      'Babel',
      'ES6',
      'JSON',
      'AJAX',
      'REST API',
      'Redux',
      'React Hooks',
      'React Router',
      'Code Splitting',
      'SSR',
      'Server Side Rendering',
      'SEO',
      'Search Engine Optimization',
    ],
    authors: [
      { name: metaData.author },
      { name: metaData.author, url: 'https://mohammad-kikhia.vercel.app' },
    ],
    category: 'technology',
    publisher: metaData.author,
    creator: metaData.author,
    twitter: {
      card: metaData.title,
      title: metaData.title,
      description: metaData.description,
      images: ['/assets/img/me1.jpg', '/assets/img/me2.jpg'],
    },
    openGraph: {
      title: metaData.title,
      description: metaData.description,
      siteName: metaData.title,
      url: 'https://mohammad-kikhia.vercel.app',
      images: [
        {
          url: '/assets/img/me1.jpg',
          width: 800,
          height: 600,
        },
        {
          url: '/assets/img/me1.jpg',
          width: 1800,
          height: 1600,
          alt: metaData.author,
        },
      ],
    },
  };
}
