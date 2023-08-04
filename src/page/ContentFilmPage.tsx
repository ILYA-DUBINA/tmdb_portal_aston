import { useSelector } from 'react-redux';

import style from './ContentFilmPage.module.css';

import { ContentFilmPageBody } from '../components/ContentFilmPage/ContentFilmPageBody';
import { ContentFilmPageFooter } from '../components/ContentFilmPage/ContentFilmPageFooter';
import { ContentFilmPageHead } from '../components/ContentFilmPage/ContentFilmPageHead';

import backgroundContentFilmPAge from '../image/backgroundonContentFilmPage.png';

const ContentFilmPage = () => {
  let film = useSelector<any>((item) => item.tmdb.tmdbContentFilm);
  console.log(film);
  return (
    <div className={style.contentfilm}>
      <div className={style.contentfilm__image}>
        <img className={style.contentfilm__image_img} src={backgroundContentFilmPAge} alt='картинка фона' />
      </div>
      <ContentFilmPageHead />
      <ContentFilmPageBody />
      <ContentFilmPageFooter />
    </div>
  );
};
export default ContentFilmPage;
