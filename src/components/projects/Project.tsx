import React from 'react';
import { FaCode, FaEye } from 'react-icons/fa6';
import { Trans } from '../../../types';
import Image from 'next/image';

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
    <li className="box tilt" data-aos="zoom-in-down">
      <Image
        width={860}
        height={860}
        draggable="false"
        src={'/assets/img/' + project.image + '.jpg'}
        alt={project.name_en}
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
    </li>
  );
}
