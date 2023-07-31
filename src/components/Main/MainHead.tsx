import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import style from './MainHead.module.css';

import ghostFour from '../../image/ghost4.png';
import searchGhost from '../../image/search.png';
import { getPopularMovies, getSearchArrayMovies } from '../../store/TMDBSlice';
import { debounce } from '../../utils/function';

// type objValue = {
//   search: string,
//   page: number
// };

const MainHead: React.FC = () => {
  let [show, setShow] = useState('hidden');
  let [valueSearch, setValueSearch] = useState<string>('');
  let [pageSearch, setPageSearch] = useState<number>(1);
  let [valueSelect, setValueSelect] = useState<string>('currentPopularOption');

  const dispatch = useDispatch<any>();

  let debounceFunc = (text: string) => {
    dispatch(
      getSearchArrayMovies({
        search: text,
        page: pageSearch,
      }),
    );
  };
  const getValueInput = (e: any) => {
    console.log(e.target.value);
    setValueSearch(e.target.value);
    if (e.target.value) {
      debounce(debounceFunc, 2000)(e.target.value);
    } else {
      dispatch(getPopularMovies({ text: '' }));
    }
  };
  const getKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(getSearchArrayMovies({ search: valueSearch, page: pageSearch }));
      setValueSearch('');
    }
  };
  const getShowClick = (e: any) => {
    e.preventDefault();
    setShow((show) => {
      if (show === 'visible') return 'hidden';
      return 'visible';
    });
    dispatch(getPopularMovies({ text: '' }));
  };
  const changeCategoryMovies = (e: any) => {
    console.log(e.target.value);
    if (e.target.value === 'ratingOption') {
      dispatch(getPopularMovies({ text: 'top_rated' }));
      setValueSelect('ratingOption');
    } else if (e.target.value === 'resentlyReleasedOption') {
      dispatch(getPopularMovies({ text: 'now_playing' }));
      setValueSelect('resentlyReleasedOption');
    } else {
      dispatch(getPopularMovies({ text: '' }));
      setValueSelect('currentPopularOption');
    }
  };

  useEffect(() => {
    dispatch(getPopularMovies({ text: '' }));
    // dispatch(getAllMovies({ search: valueSearch, page: pageSearch }));
  }, [dispatch]);
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
};

export { MainHead };
