import { useSelector } from 'react-redux';

import { ActorsBodyItem } from './ActorsBodyItem';

import { SpinerLoading } from '../../../spinerLoading/spinerLoading';
import { getRandomNumber } from '../../../utils/function';

const ActorsBodyMapItem = () => {
  let tmdbArray = useSelector((state: any) => {
    return state.tmdbActors.tmdbActors.length ? state.tmdbActors.tmdbActors : state.tmdbActors.tmdbSearchActors;
  });
  let elements = tmdbArray.map((item: any) => {
    if (item === null) {
      return <SpinerLoading />;
    }
    return <ActorsBodyItem key={item.id + getRandomNumber(0, 1000)} {...item} />;
  });

  return <>{elements}</>;
};

export { ActorsBodyMapItem };
