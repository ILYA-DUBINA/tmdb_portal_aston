import { useSelector } from 'react-redux';

import { MainBodyItem } from './MainBodyItem';

import { SpinerLoading } from '../../../spinerLoading/spinerLoading';

interface Obj {
  id: number;
  title: string;
  known_for: object[];
  overview: string;
  poster_path: string;
  release_date: string;
}

export const MainBodyMapItem = () => {
  let tmdbArray = useSelector(
    (state: {
      tmdb: {
        tmdb: [
          {
            id: number;
            title: string;
            known_for: object[];
            overview: string;
            poster_path: string;
            release_date: string;
          },
        ];
      };
    }) => state.tmdb.tmdb,
  );
  let elements = tmdbArray?.map((item: Obj) => {
    if (item === null) {
      return <SpinerLoading />;
    }
    return (
      <MainBodyItem
        id={item.id}
        title={item.title}
        known_for={item.known_for}
        overview={item.overview}
        poster_path={item.poster_path}
        release_date={item.release_date}
        key={item.id}
      />
    );
  });

  return <>{elements}</>;
};
