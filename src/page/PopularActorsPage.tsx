import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import style from './PopularActorsPage.module.css';

import { ActorsBody } from '../components/PopularActors/ActorsBody';
import { ActorsHead } from '../components/PopularActors/ActorsHead';

import backgroundActorsPage from '../image/backgroundActorsPage.png';
import { getPopularActors, getSearchArrayActors } from '../store/TMDBActorsSlice';
import { debounce } from '../utils/function';
const PopularActorsPage = () => {
  let [fetching, setFetching] = useState<boolean>(true);
  let [pageValue, setPageValue] = useState<string>('');
  let [pageNumber, setPageNumber] = useState<number>(1);
  let dispatch = useDispatch<any>();
  let debounceFuncSearch = () => {
    dispatch(
      getSearchArrayActors({
        search: pageValue,
        page: pageNumber,
      }),
    );
  };
  let debounceFuncPopular = () => {
    dispatch(
      getPopularActors({
        page: pageNumber,
      }),
    );
  };
  useEffect(() => {
    setFetching(false);
    if (fetching && pageValue) {
      debounce(debounceFuncSearch, 0)();
      setPageNumber((item) => item + 1);
    } else if (fetching && !pageValue) {
      debounce(debounceFuncPopular, 0)();
      setPageNumber((item) => item + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e: any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };
  return (
    <div className={style.main}>
      <div className={style.main__image}>
        <img className={style.main__image_img} src={backgroundActorsPage} alt='картинка фона' />
      </div>
      <ActorsHead setPageValue={setPageValue} />
      <ActorsBody />
    </div>
  );
};

export default PopularActorsPage;
