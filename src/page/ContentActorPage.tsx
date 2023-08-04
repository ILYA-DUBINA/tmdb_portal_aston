import { useSelector } from 'react-redux';

import style from './ContentActorPage.module.css';

import { ContentActorBody } from '../components/ContentActor/ContentActorBody';
import { ContentActorFooter } from '../components/ContentActor/ContentActorFooter';
import { ContentActorHead } from '../components/ContentActor/ContentActorHead';

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

const ContentActorPage = () => {
  let film: any = useSelector<any>((item) => item.tmdb.tmdbContentFilm);
  let { budget, genres, overview, popularity, poster_path, production_companies, release_date, title }: obj = film;
  console.log(film);
  return (
    <div className={style.contentfilm}>
      <div className={style.contentfilm__image}>
        <img className={style.contentfilm__image_img} src={backgroundContentFilmPAge} alt='картинка фона' />
      </div>
      <ContentActorHead release_date={release_date} title={title} genres={genres} />
      <ContentActorBody poster_path={poster_path} overview={overview} />
      <ContentActorFooter budget={budget} popularity={popularity} production_companies={production_companies} />
    </div>
  );
};
export default ContentActorPage;
