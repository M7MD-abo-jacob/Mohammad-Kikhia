import Link from 'next/link';
import { FaHeart } from 'react-icons/fa6';
import FaChevronCircleEnd from '@/components/shared/FaChevronCircleEnd';
import { Locale } from '@/i18n-config';
import { trans } from '@/lib/trans';
import { sections, socials, contactMethods } from '@/data/variables';
import { Trans } from '../../../../types';

const Footer = ({ lang, t }: { lang: Locale; t: Trans }) => {
  return (
    <footer className="footer">
      <div className="width-container">
        <div className="box-container">
          <div data-aos="fade-up" className="box">
            <h3>{t.footer.title}</h3>
            <p>{t.footer.subtext}</p>
          </div>

          <div data-aos="fade-up" className="box">
            <h3>{t.footer.links}</h3>
            {sections.map((section) => (
              <Link key={section} href={`#${section}`}>
                <FaChevronCircleEnd lang={lang} /> {t.nav[section]}
              </Link>
            ))}
          </div>

          <div className="box contact-methods">
            <h3 data-aos="fade-up">{t.footer.contact_methods}</h3>
            {contactMethods.map((item, i) => {
              const Icon = item.icon;
              return item.href ? (
                <a
                  data-aos="zoom-out-down"
                  data-aos-delay={i * 100}
                  data-aos-offset="50"
                  key={item.title}
                  href={item.href}>
                  <Icon />
                  <span dir="ltr">{item.title}</span>
                </a>
              ) : (
                <p
                  key={item.title}
                  data-aos="zoom-out-down"
                  data-aos-delay={i * 100}
                  data-aos-offset="50">
                  <Icon />
                  <span dir="ltr">{item.title}</span>
                </p>
              );
            })}
            <div className="socials">
              <ul>
                {socials.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      data-aos="zoom-out-down"
                      data-aos-delay={i * 100}
                      data-aos-offset="0"
                      key={item.title}>
                      <a
                        href={item.href}
                        aria-label={item.title}
                        target="_blank"
                        rel="noreferrer">
                        <Icon />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* ---------- CREDIT ---------- */}
        <h4 data-aos="zoom-in" data-aos-offset="0" className="credit">
          {trans(t.footer.signature, {
            i: <FaHeart />,
            a: (
              <a
                target="_blank"
                href="https://www.github.com/M7MD-abo-jacob/"
              />
            ),
          })}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
