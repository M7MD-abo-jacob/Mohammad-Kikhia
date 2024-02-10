import Image from 'next/image';
import { FaLaptopCode } from 'react-icons/fa6';
import { skills } from '@/data/skills';
import { trans } from '@/lib/trans';
import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/i18n-config';
import Tilter from '@/components/shared/Tilter';

const Skills = async ({ params }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang, ['home']);
  const t = dictionary.home.skills;

  return (
    <section className="skills" id="skills">
      <div className="width-container">
        <h2 className="heading">
          <FaLaptopCode /> {trans(t.title, { span: <span /> })}
        </h2>
        <div className="container">
          <div className="row" id="skillsContainer">
            {skills.map((skill, i) => (
              <Tilter
                key={skill.name}
                data-aos="zoom-out-down"
                data-aos-delay={i * 100}>
                <div className="bar">
                  <div className="info">
                    <Image
                      src={skill.icon}
                      alt="skill"
                      height={50}
                      width={50}
                    />
                    <span>{skill.name}</span>
                  </div>
                </div>
              </Tilter>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
