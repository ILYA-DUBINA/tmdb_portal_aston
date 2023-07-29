// import style from './MainBody.module.css';

import { useSelector } from 'react-redux';

import { MainBodyItem } from './MainBodyItem';

import { SpinerLoading } from '../../../spinerLoading/spinerLoading';
import { getRandomNumber } from '../../../utils/function';

const MainBodyMapItem = () => {
  let tmdbArray = useSelector((state: any) => state.tmdb.tmdb);
  console.log(tmdbArray);
  let elements = tmdbArray.map((item: any) => {
    if (item === null) {
      return <SpinerLoading />;
    }
    return <MainBodyItem key={getRandomNumber(0, 1000) + getRandomNumber(1000, 2000)} {...item} />;
  });

  return <>{elements}</>;
};

export { MainBodyMapItem };