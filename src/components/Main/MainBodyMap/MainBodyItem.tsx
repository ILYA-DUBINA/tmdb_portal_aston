import moment from 'moment';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SpinerLoadingImage } from '../../../spinerLoading/spinerLoading';
import { getContentFilm } from '../../../store/TMDBSlice';
import { minify } from '../../../utils/function';
import './MainBodyItem.css';

interface Props {
  id: number;
  title: string;
  known_for: object[];
  overview: string;
  poster_path: string;
  release_date: string;
}

export const MainBodyItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch<any>();

  let image;
  let { id, title, release_date, overview, poster_path } = props;

  if (poster_path !== null) {
    image = (
      <img
        className='cover-image'
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt='картинка постера фильма'
      />
    );
  } else {
    image = <SpinerLoadingImage />;
  }

  const getFilmId = useCallback(() => {
    dispatch(getContentFilm({ id: id }));
  }, [dispatch, id]);
  return (
    <li className='card__outside'>
      <Link to={'/contentFilm'} onClick={getFilmId}>
        <div className='card'>
          <div className='wrapper'>
            {image}
            <h3 className='wrapper__title'>{title}</h3>
          </div>
          <div className='character card__inside'>
            <div className='card__content'>
              <div className='card__content-data'>
                <div className='card__data-header'>
                  <h2 className='card__data-title'>{title}</h2>
                </div>
                <p className='card__data-time'>{moment(release_date).format('MMMM D, YYYY')}</p>
                <p className='card__data-text'>{minify(overview, 200)}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
