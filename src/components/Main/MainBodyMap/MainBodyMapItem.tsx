import { useSelector } from 'react-redux';

import { MainBodyItem } from './MainBodyItem';

import { SpinerLoading } from '../../../spinerLoading/spinerLoading';

const MainBodyMapItem = () => {
  let tmdbArray = useSelector((state: any) => state.tmdb.tmdb);
  let elements = tmdbArray.map((item: any) => {
    if (item === null) {
      return <SpinerLoading />;
    }
    return <MainBodyItem key={item.id} {...item} />;
  });

  return <>{elements}</>;
};

export { MainBodyMapItem };
