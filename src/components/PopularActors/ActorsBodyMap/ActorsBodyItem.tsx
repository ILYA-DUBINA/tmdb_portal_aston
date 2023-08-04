/* eslint-disable import/order */
// import style from './MainBody.module.css';

// import moment from 'moment';
import { useDispatch } from 'react-redux';

import { SpinerLoadingImage } from '../../../spinerLoading/spinerLoading';
import { Link } from 'react-router-dom';
// import { minify } from '../../../utils/function';
import './ActorsBodyItem.css';
// import { useState } from 'react';
// eslint-disable-next-line import/order
// import poster_path from '../../../image/background.jpg';
import { getContentActor } from '../../../store/TMDBActorsSlice';

const ActorsBodyItem = (props: any) => {
  // let [valueSearch, setValueSearch] = useState(null);
  const dispatch = useDispatch<any>();

  // dispatch(fetchTMDBFunc());

  let image;
  // let { genre_ids, id, overview, popularity, poster_path, release_date, title } = props;
  let { id, name, known_for, profile_path } = props;

  if (profile_path !== null) {
    image = (
      <img
        className='cover-image'
        src={`https://image.tmdb.org/t/p/original${profile_path}`}
        alt='картинка изображения актера'
      />
    );
  } else {
    image = <SpinerLoadingImage />;
  }
  const getActorId = () => {
    dispatch(getContentActor({ id: id }));
  };
  return (
    <li className='card__outside'>
      {/* <div className='card'>
        <div className='card__content'>
          {image}
          <div className='card__content-data'>
            <div className='card__data-header'>
              <h2 className='card__data-title'>{original_title}</h2>
              <div className='card__data-reting' style={{ border: `2px solid ${color}` }}>
                <span>{rating}</span>
              </div>
            </div>
            <p className='card__data-time'>{moment(release_date).format('MMMM D, YYYY')}</p>
            <div className='card__data-ganre'>
              {showGenres[0] ? <div className='card__ganre-title'>{showGenres[0]}</div> : null}
              {showGenres[1] ? <div className='card__ganre-name'>{showGenres[1]}</div> : null}
              {showGenres[2] ? <div className='card__ganre-name'>{showGenres[2]}</div> : null}
            </div>
            <p className='card__data-text'>{minify(overview, 200)}</p>
          </div>
        </div>
      </div> */}
      <Link to={'/contentActor'} onClick={getActorId}>
        <div className='card'>
          <div className='wrapper'>
            {image}
            {/* <img className='cover-image' src={poster_path} alt='картинка постера фильма' /> */}
            <h3 className='wrapper__title'>{name}</h3>
          </div>
          <div className='character card__inside'>
            <div className='card__content'>
              <div className='card__content-data'>
                <div className='card__data-header'>
                  <h2 className='card__data-title'>{name}</h2>
                </div>
                {/* <p className='card__data-time'>{moment(release_date).format('MMMM D, YYYY')}</p> */}
                <div className='card__data-movies'>
                  <h4 className='movies__title'>Снимался(лась) в таких известных фильмах(е) как: </h4>
                  {known_for.map((item: any) => {
                    return (
                      <div className='movies__film' key={item.id}>
                        {item.title || item.name}
                      </div>
                    );
                  })}
                </div>
                {/* <p className='card__data-text'>{minify(overview, 200)}</p> */}
              </div>
            </div>
          </div>
          {/* <img className='title' src={original_title} /> */}
          {/* <img className='character' src={poster_path} /> */}
        </div>
      </Link>
      {/* <a href='https://www.mythrillfiction.com/the-dark-rider'>
        <div className='card'>
          <div className='wrapper'>
            <img className='cover-image' src='https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg' />
          </div>
          <img className='title' src='https://ggayane.github.io/css-experiments/cards/dark_rider-title.png' />
          <img className='character' src='https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp' />
        </div>
      </a> */}
    </li>
  );
};

export { ActorsBodyItem };
