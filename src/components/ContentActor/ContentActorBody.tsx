import React from 'react';

import style from './ContentActorBody.module.css';

import { SpinerLoadingImage } from '../../spinerLoading/spinerLoading';

interface Props {
  profile_path: string;
  biography: string;
}

export const ContentActorBody: React.FC<Props> = ({ profile_path, biography }) => {
  let image;
  if (profile_path) {
    image = (
      <img
        className={style.content__image_img}
        src={`https://image.tmdb.org/t/p/original${profile_path}`}
        alt='картинка постера фильма'
      />
    );
  } else {
    image = <SpinerLoadingImage />;
  }

  return (
    <section className={style.content}>
      <div className={style.content__image}>{image}</div>
      {biography ? (
        <div className={style.content__text}>
          <h5 className={style.content__text_title}>{biography}</h5>
        </div>
      ) : null}
    </section>
  );
};
