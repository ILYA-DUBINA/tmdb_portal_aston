// import { Pagination } from 'antd';
// import 'antd/dist/reset.css';
// import { useSelector } from 'react-redux';

// import React { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';

import style from './ActorsFooter.module.css';

// import { getPopularActors } from '../../store/TMDBActorsSlice';
// type obj = {
//   page: number;
// };
const ActorsFooter: React.FC = () => {
  // let { setNumberPage } = props;
  // let numberTotal = useSelector((item: any) => item.tmdb.totalElements);
  // console.log(array);
  // let [fetching, setFetching] = useState<boolean></boolean>(true);
  // let [pageValue, setPageValue] = useState<number>(1);
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   setPageValue((item) => item + 1);
  // dispatch(getPopularActors({ page: pageValue }));
  //     document.addEventListener('scroll', scrollHandler);
  //     return () => {
  //       document.removeEventListener('scroll', scrollHandler);
  //     };
  //   }, [fetching]);

  //   const scrollHandler = (e: any) => {
  //     if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
  //       setFetching(true);
  //     }
  //   };
  return <div className={style.pagination}></div>;
};

export { ActorsFooter };
