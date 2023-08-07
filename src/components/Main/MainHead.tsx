import { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import style from './MainHead.module.css';

import ghostFour from '../../image/ghost4.png';
import searchGhost from '../../image/search.png';
import { getPopularMovies, getSearchArrayMovies } from '../../store/TMDBSlice';
import { useDebounce } from '../../utils/Debounce';

interface Props {
  numberPage: number;
  setNumberPage: Function;
}

export const MainHead: React.FC<Props> = memo(function MainHead(props) {
  let { numberPage, setNumberPage } = props;
  let [show, setShow] = useState('hidden');
  let [valueSearch, setValueSearch] = useState<string>('');
  let [valueSelect, setValueSelect] = useState<string>('currentPopularOption');
  const debouncedValue = useDebounce<string>(valueSearch, 1000);
  const dispatch = useDispatch<any>();
  const getValueInput = (e: { target: { value: string } }) => {
    setValueSearch(e.target.value);
  };
  const getKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter' && debouncedValue) {
      dispatch(
        getSearchArrayMovies({
          search: debouncedValue,
          page: numberPage,
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
  const changeCategoryMovies = (e: { target: { value: string } }) => {
    if (e.target.value === 'ratingOption') {
      dispatch(getPopularMovies({ text: 'top_rated', page: numberPage }));
      setValueSelect('ratingOption');
      setValueSearch('');
      setNumberPage(1);
    } else if (e.target.value === 'resentlyReleasedOption') {
      dispatch(getPopularMovies({ text: 'now_playing', page: numberPage }));
      setValueSelect('resentlyReleasedOption');
      setValueSearch('');
      setNumberPage(1);
    } else {
      dispatch(getPopularMovies({ text: '', page: numberPage }));
      setValueSelect('currentPopularOption');
      setValueSearch('');
      setNumberPage(1);
    }
  };
  useEffect(() => {
    if (debouncedValue) {
      dispatch(
        getSearchArrayMovies({
          search: debouncedValue,
          page: numberPage,
        }),
      );
    } else if (valueSelect === 'resentlyReleasedOption') {
      dispatch(getPopularMovies({ text: 'now_playing', page: numberPage }));
    } else if (valueSelect === 'ratingOption') {
      dispatch(getPopularMovies({ text: 'top_rated', page: numberPage }));
    } else {
      dispatch(getPopularMovies({ text: debouncedValue, page: numberPage }));
    }
  }, [debouncedValue, dispatch, numberPage, valueSearch, valueSelect]);
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
          Введите название фильма
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
      <div className={style.main__search_select + ' ' + style[show]}>
        <label className={style.input__label} htmlFor='select__content'>
          Выберите категорию поиска
        </label>
        <select
          className={style.select__content}
          id='select__content'
          value={valueSelect}
          onChange={changeCategoryMovies}
        >
          <option className={style.select__content_option} value='currentPopularOption'>
            Текущие популярные фильмы на TMDB
          </option>
          <option className={style.select__content_option} value='ratingOption'>
            Фильмы с самым высоким рейтингом на TMDB
          </option>
          <option className={style.select__content_option} value='resentlyReleasedOption'>
            Недавно вышедшие фильмы на TMDB
          </option>
        </select>
      </div>
      <div className={style.main__image + ' ' + style[show]}>
        <img className={style.main__image} src={searchGhost} alt='картинка прибора по поиску призраков' />
      </div>
    </div>
  );
});
