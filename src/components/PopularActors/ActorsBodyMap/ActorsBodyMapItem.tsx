// import style from './MainBody.module.css';

import { useSelector } from 'react-redux';

// import { MainBodyItem } from './MainBodyItem';
import { ActorsBodyItem } from './ActorsBodyItem';

import { SpinerLoading } from '../../../spinerLoading/spinerLoading';
// import { getRandomNumber } from '../../../utils/function';
import { getRandomNumber } from '../../../utils/function';

const ActorsBodyMapItem = () => {
  let tmdbArray = useSelector((state: any) => {
    console.log(state, !state.tmdbActors.tmdbActors.length);
    return state.tmdbActors.tmdbActors.length ? state.tmdbActors.tmdbActors : state.tmdbActors.tmdbSearchActors;
  });
  console.log(tmdbArray);
  let elements = tmdbArray.map((item: any) => {
    if (item === null) {
      return <SpinerLoading />;
    }
    return <ActorsBodyItem key={item.id + getRandomNumber(0, 1000)} {...item} />;
  });

  return <>{elements}</>;
};

export { ActorsBodyMapItem };
