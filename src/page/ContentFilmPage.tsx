import { useSelector } from 'react-redux';

import style from './ContentFilmPage.module.css';

import { ContentFilmBody } from '../components/ContentFilm/ContentFilmBody';
import { ContentFilmFooter } from '../components/ContentFilm/ContentFilmFooter';
import { ContentFilmHead } from '../components/ContentFilm/ContentFilmHead';

import backgroundContentFilmPAge from '../image/backgroundonContentFilmPage.png';

interface obj {
  budget: number;
  genres: Array<object>;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: Array<object>;
  release_date: string;
  title: string;
}

const ContentFilmPage = () => {
  let film: any = useSelector<any>((item) => item.tmdb.tmdbContentFilm);
  let { budget, genres, overview, popularity, poster_path, production_companies, release_date, title }: obj = film;
  console.log(film);
  return (
    <div className={style.contentfilm}>
      <div className={style.contentfilm__image}>
        <img className={style.contentfilm__image_img} src={backgroundContentFilmPAge} alt='картинка фона' />
      </div>
      <ContentFilmHead release_date={release_date} title={title} genres={genres} />
      <ContentFilmBody poster_path={poster_path} overview={overview} />
      <ContentFilmFooter budget={budget} popularity={popularity} production_companies={production_companies} />
    </div>
  );
};
export default ContentFilmPage;
