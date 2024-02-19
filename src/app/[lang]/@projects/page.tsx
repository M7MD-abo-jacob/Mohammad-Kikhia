import { FaLaptopCode } from 'react-icons/fa6';
import Project from '@/components/projects/Project';
import { Locale } from '@/i18n-config';
import { trans } from '@/lib/trans';
import { getDictionary } from '@/lib/getDictionary';
import { projects } from '@/data/projects';

const Work = async ({ params }: { params: { lang: Locale } }) => {
  const dictionary = await getDictionary(params.lang, ['home']);
  const t = dictionary.home.projects;

  return (
    <section className="projects" id="projects">
      <div className="width-container">
        <h2 className="heading">
          <FaLaptopCode /> {trans(t.title, { span: <span /> })}
        </h2>
        <ul className="box-container">
          {projects.map((project) => (
            <Project
              key={project.name_en}
              t={t}
              lang={params.lang === 'ar' ? params.lang : 'en'}
              project={project}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
