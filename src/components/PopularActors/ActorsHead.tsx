import { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import style from './ActorsHead.module.css';

import ghostFour from '../../image/ghost4.png';
import searchGhost from '../../image/search.png';
import { getPopularActors, getSearchArrayActors } from '../../store/TMDBActorsSlice';
import { useDebounce } from '../../utils/Debounce';

interface Props {
  setPageValue: Function;
}

const ActorsHead: React.FC<Props> = (props) => {
  let { setPageValue } = props;
  let [show, setShow] = useState('hidden');
  let [valueSearch, setValueSearch] = useState<string>('');
  let [lengthSearchValue, setLengthSearchValue] = useState<number>(0);
  const dispatch = useDispatch<any>();
  const debouncedValue = useDebounce<string>(valueSearch, 1000);
  const getValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
    setLengthSearchValue(e.target.value.length);
  };
  const getKeyDown = (e: any) => {
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
  const getShowClick = (e: any) => {
    e.preventDefault();
    setShow((show) => {
      if (show === 'visible') return 'hidden';
      return 'visible';
    });
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
  useEffect(() => {
    if (lengthSearchValue) {
      dispatch(
        getPopularActors({
          page: 1,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lengthSearchValue]);

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
          autoComplete='off'
        />
      </div>
      <div className={style.main__image + ' ' + style[show]}>
        <img className={style.main__image} src={searchGhost} alt='картинка прибора по поиску призраков' />
      </div>
    </div>
  );
};

export { ActorsHead };
