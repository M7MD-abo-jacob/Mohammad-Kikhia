import Link from 'next/link';
import Image from 'next/image';
import { FaUserAlt } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/i18n-config';
import { trans } from '@/lib/trans';
import Tilter from '@/components/shared/Tilter';

const About = async ({ params }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang, ['home']);
  const t = dictionary.home.about;
  return (
    <section className="about" id="about">
      <div className="width-container">
        <h2 className="heading">
          <FaUserAlt />
          {trans(t.section_title, { span: <span /> })}
        </h2>
        <div className="row">
          {/* ---------- IMAGE ---------- */}
          <Tilter data-aos="fade-up">
            <Image
              draggable="false"
              className="tilt"
              src="/assets/img/me2.jpg"
              width={1000}
              height={1000}
              alt=""
            />
          </Tilter>
          {/* ---------- CONTENT ---------- */}
          <div className="content">
            <h3 data-aos="fade-up">{t.title}</h3>
            <h4 data-aos="fade-up" className="tag">
              {t.subtitle}
            </h4>
            <p data-aos="fade-up">{t.subtext}</p>
            {/* ---------- RESUME BUTTON ---------- */}
            <div data-aos="fade-up" className="resumebtn">
              <Link
                href="/assets/files/mohammad-kikhia.pdf"
                target="_blank"
                className="btn">
                <span>{t.resume}</span>
                <FaDownload />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
