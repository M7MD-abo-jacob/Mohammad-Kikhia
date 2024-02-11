import React from 'react';
import { FaCode, FaEye } from 'react-icons/fa6';
import { Trans } from '../../../types';
import { languages } from '@/data/variables';

type Props = {
  lang: 'ar' | 'en';
  project: {
    name_en: string;
    name_ar: string;
    desc_en: string;
    desc_ar: string;
    image: string;
    links: {
      visit: string;
      code: string;
    };
  };
  t: Trans;
};

export default function Project({ project, t, lang }: Props) {
  return (
    <div className="box tilt" data-aos="zoom-in-down">
      <img
        draggable="false"
        src={'/assets/img/' + project.image + '.jpg'}
        alt="project"
      />
      <div className="content">
        <div className="tag">
          <h3>{project[`name_${lang}`] || project.name_en}</h3>
        </div>
        <div className="desc">
          <p>{project[`desc_${lang}`] || project.desc_en}</p>
          <div className="btns">
            <a
              href={project.links.visit}
              className="btn"
              target="_blank"
              rel="noreferrer">
              <FaEye /> {t.visit}
            </a>
            <a
              href={project.links.code}
              className="btn"
              target="_blank"
              rel="noreferrer">
              <FaCode /> {t.code}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
