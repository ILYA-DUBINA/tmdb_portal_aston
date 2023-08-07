import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { SpinerLoadingImage } from '../../../spinerLoading/spinerLoading';
import './ActorsBodyItem.css';
import { getContentActor } from '../../../store/TMDBActorsSlice';
interface Props {
  id: number;
  name: string;
  known_for: object[];
  profile_path: string;
}
type obj = {
  id?: number;
  title?: string;
  name?: string;
};
export const ActorsBodyItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch<any>();
  let image;
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
  const getActorId = useCallback(() => {
    dispatch(getContentActor({ id: id }));
  }, [dispatch, id]);
  return (
    <li className='card__outside'>
      <Link to={'/contentActor'} onClick={getActorId}>
        <div className='card'>
          <div className='wrapper'>
            {image}
            <h3 className='wrapper__title'>{name}</h3>
          </div>
          <div className='character card__inside'>
            <div className='card__content'>
              <div className='card__content-data'>
                <div className='card__data-header'>
                  <h2 className='card__data-title'>{name}</h2>
                </div>
                <div className='card__data-movies'>
                  <h4 className='movies__title'>Снимался(лась) в таких известных фильмах(е) как: </h4>
                  {known_for.map((item: obj) => {
                    return (
                      <div className='movies__film' key={item.id}>
                        {item.title || item.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
