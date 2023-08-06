import { useSelector } from 'react-redux';

import { ActorsBodyItem } from './ActorsBodyItem';

import { SpinerLoading } from '../../../spinerLoading/spinerLoading';
import { getRandomNumber } from '../../../utils/function';

interface Obj {
  id: number;
  name: string;
  known_for: object[];
  profile_path: string;
}

const ActorsBodyMapItem = () => {
  let tmdbArray = useSelector(
    (state: {
      tmdbActors: {
        tmdbActors: [{ id: number; name: string; known_for: object[]; profile_path: string }];
        tmdbSearchActors: [{ id: number; name: string; known_for: object[]; profile_path: string }];
      };
    }) => {
      return state.tmdbActors.tmdbActors.length ? state.tmdbActors.tmdbActors : state.tmdbActors.tmdbSearchActors;
    },
  );
  let elements = tmdbArray.map((item: Obj) => {
    if (item === null) {
      return <SpinerLoading />;
    }
    return (
      <ActorsBodyItem
        id={item.id}
        name={item.name}
        known_for={item.known_for}
        profile_path={item.profile_path}
        key={item.id + getRandomNumber(0, 1000)}
      />
    );
  });

  return <>{elements}</>;
};

export { ActorsBodyMapItem };
