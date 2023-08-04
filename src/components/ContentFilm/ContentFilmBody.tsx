import React from 'react';

import style from './ContentFilmBody.module.css';

import { SpinerLoadingImage } from '../../spinerLoading/spinerLoading';

interface Props {
  poster_path: string;
  overview: string;
}

export const ContentFilmBody: React.FC<Props> = ({ poster_path, overview }) => {
  let image;
  if (poster_path !== null) {
    image = (
      <img
        className={style.content__image_img}
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt='картинка постера фильма'
      />
    );
  } else {
    image = <SpinerLoadingImage />;
  }

  return (
    <section className={style.content}>
      <div className={style.content__image}>{image}</div>
      <div className={style.content__text}>
        <h5 className={style.content__text_title}>{overview}</h5>
        <p></p>
      </div>
    </section>
  );
};
