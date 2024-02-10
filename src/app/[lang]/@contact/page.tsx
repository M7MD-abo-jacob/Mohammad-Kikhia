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
            <div data-aos="fade-in-left" className="image-box">
              <Image
                src="/assets/img/contact1.png"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <EmailForm t={t} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
