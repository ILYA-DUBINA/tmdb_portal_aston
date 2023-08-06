import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import style from './ActorsHead.module.css';

import ghostFour from '../../image/ghost4.png';
import searchGhost from '../../image/search.png';
import { clearTmdbActors, getPopularActors, getSearchArrayActors } from '../../store/TMDBActorsSlice';
import { useDebounce } from '../../utils/Debounce';

interface Props {
  setPageValue: Function;
}

export const ActorsHead: React.FC<Props> = (props) => {
  let { setPageValue } = props;
  let [show, setShow] = useState<string>('hidden');
  let [valueSearch, setValueSearch] = useState<string>('');
  const dispatch = useDispatch<any>();
  const debouncedValue = useDebounce<string>(valueSearch, 1000);
  const getValueInput = (e: { target: { value: string } }) => {
    setValueSearch(e.target.value);
    if (!e.target.value) {
      dispatch(
        getPopularActors({
          page: 1,
        }),
      );
    }
  };
  const getKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter' && debouncedValue) {
      dispatch(
        getSearchArrayActors({
          search: debouncedValue,
          page: 1,
        }),
      );
      setValueSearch('');
    }
  };
  const getShowClick = (e: { preventDefault: Function }) => {
    e.preventDefault();
    setShow((show) => {
      if (show === 'visible') return 'hidden';
      return 'visible';
    });
  };
  const clearContent = () => {
    dispatch(clearTmdbActors());
    dispatch(
      getPopularActors({
        page: 1,
      }),
    );
  };
  useEffect(() => {
    if (debouncedValue) {
      dispatch(
        getSearchArrayActors({
          search: debouncedValue,
          page: 1,
        }),
      );
      setPageValue(debouncedValue);
    }
    setPageValue(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className={style.main__search}>
      <div className={style.main__search_button}>
        <a className={style.button__search} href='/' onClick={getShowClick}>
          Поиск
        </a>
        <div className={style.character + ' ' + style.link__image}>
          <img className={style.link__image_img} src={ghostFour} alt='иконка бодрого призрака' />
        </div>
      </div>
      <div className={style.main__search_input + ' ' + style[show]}>
        <label className={style.input__label} htmlFor='main__search'>
          Введите имя актера
        </label>
        <input
          className={style.input__text}
          type='text'
          id='main__search'
          value={valueSearch}
          onChange={getValueInput}
          onKeyDown={getKeyDown}
          onFocus={clearContent}
          autoComplete='off'
        />
      </div>
      <div className={style.main__image + ' ' + style[show]}>
        <img className={style.main__image} src={searchGhost} alt='картинка прибора по поиску призраков' />
      </div>
    </div>
  );
};
