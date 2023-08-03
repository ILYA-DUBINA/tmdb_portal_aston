// import { useState, useEffect } from 'react';

// import { useDispatch } from 'react-redux';

import style from './ActorsBody.module.css';

import { ActorsBodyMapItem } from './ActorsBodyMap/ActorsBodyMapItem';

// import { getPopularActors } from '../../store/TMDBActorsSlice';

const ActorsBody = () => {
  // let [fetching, setFetching] = useState<boolean>(true);
  // let [pageValue, setPageValue] = useState<number>(1);
  // let dispatch = useDispatch<any>();
  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);
  //   setPageValue((item) => item + 1);
  //   return () => {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, [fetching]);

  // const scrollHandler = (e: any) => {
  //   if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
  //     setFetching(true);

  //     dispatch(getPopularActors({ page: pageValue }));
  //   }
  // };

  return <div className={style.main__body}>{<ActorsBodyMapItem />}</div>;
};

export { ActorsBody };
