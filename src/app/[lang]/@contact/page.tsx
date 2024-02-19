import Image from 'next/image';
import { FaHeadset } from 'react-icons/fa6';
import EmailForm from '@/components/contact/EmailForm';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/getDictionary';
import { trans } from '@/lib/trans';

const Contact = async ({ params }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang, ['home']);
  const t = dictionary.home.contact;

  return (
    <section className="contact" id="contact">
      <div className="width-container">
        <h2 className="heading">
          <FaHeadset />
          {trans(t.title, { span: <span /> })}
        </h2>
        <div className="container">
          <div className="content">
            {/* ---------- IMAGE ---------- */}
            <div data-aos="fade-in-left" className="image-box">
              <Image
                draggable="false"
                src="/assets/img/contact1.png"
                alt={dictionary.home.common.metadata.author}
                width={360}
                height={391}
              />
            </div>
            {/* ---------- EMAIL FORM ---------- */}
            <EmailForm t={t} lang={params.lang} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
