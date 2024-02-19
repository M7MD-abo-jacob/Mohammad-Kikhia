import Link from 'next/link';
import { FaHeart } from 'react-icons/fa6';
import FaChevronCircleEnd from '@/components/shared/FaChevronCircleEnd';
import { Locale } from '@/i18n-config';
import { trans } from '@/lib/trans';
import { sections, socials, contactMethods } from '@/data/variables';
import { Trans } from '../../../types';

const Footer = ({ lang, t }: { lang: Locale; t: Trans }) => {
  return (
    <footer className="footer">
      <div className="width-container">
        <div className="box-container">
          {/* ---------- TEXT ---------- */}
          <div data-aos="zoom-in" className="box">
            <h3>{t.footer.title}</h3>
            <p>{t.footer.subtext}</p>
          </div>

          {/* ---------- QUICK LINKS ---------- */}
          <div data-aos="zoom-in" className="box">
            <h3>{t.footer.links}</h3>
            <nav>
              <ul>
                {sections.map((section, i) => (
                  <li key={section} data-aos="zoom-in" data-aos-delay={i * 100}>
                    <Link href={`#${section}`}>
                      <FaChevronCircleEnd lang={lang} /> {t.nav[section]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ---------- CONTACT METHODS ---------- */}
          <div className="box contact-methods">
            <h3 data-aos="zoom-in">{t.footer.contact_methods}</h3>
            {contactMethods.map((item, i) => {
              const Icon = item.icon;
              return item.href ? (
                <a
                  title={t.footer[item.name]}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  data-aos-offset="50"
                  key={item.title}
                  href={item.href}>
                  <Icon />
                  <span dir="ltr">{item.title}</span>
                </a>
              ) : (
                <p
                  title={t.footer[item.name]}
                  key={item.title}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  data-aos-offset="50">
                  <Icon />
                  <span dir="ltr">{item.title}</span>
                </p>
              );
            })}
            {/* ---------- SOCIAL ACCOUNTS LINKS ---------- */}
            <div className="socials">
              <ul>
                {socials.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      title={item.title}
                      data-aos="zoom-in"
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
