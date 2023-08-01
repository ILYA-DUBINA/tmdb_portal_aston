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
interface Props {
  numberPage: number;
}

const MainHead: React.FC<Props> = (props: Props): any => {
  let { numberPage } = props;
  let [show, setShow] = useState('hidden');
  let [valueSearch, setValueSearch] = useState<string>('');
  // let [pageSearch, setPageSearch] = useState<number>(1);
  let [valueSelect, setValueSelect] = useState<string>('currentPopularOption');
  const dispatch = useDispatch<any>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let debounceFunc = (text: string) => {
    dispatch(
      getSearchArrayMovies({
        search: text,
        page: numberPage,
      }),
    );
  };
  const getValueInput = (e: any) => {
    // console.log(e.target.value);
    setValueSearch(e.target.value);
    if (e.target.value) {
      debounce(debounceFunc, 2000)(e.target.value);
    } else {
      dispatch(getPopularMovies({ text: '', page: numberPage }));
    }
  };
  const getKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      debounce(debounceFunc, 2000)(valueSearch);
      setValueSearch('');
    }
  };
  const getShowClick = (e: any) => {
    e.preventDefault();
    setShow((show) => {
      if (show === 'visible') return 'hidden';
      return 'visible';
    });
    dispatch(getPopularMovies({ text: '', page: numberPage }));
  };

  const changeCategoryMovies = (e: any) => {
    console.log(e.target.value);
    if (e.target.value === 'ratingOption') {
      dispatch(getPopularMovies({ text: 'top_rated', page: numberPage }));
      setValueSelect('ratingOption');
      setValueSearch('');
    } else if (e.target.value === 'resentlyReleasedOption') {
      dispatch(getPopularMovies({ text: 'now_playing', page: numberPage }));
      setValueSelect('resentlyReleasedOption');
      setValueSearch('');
    } else {
      dispatch(getPopularMovies({ text: '', page: numberPage }));
      setValueSelect('currentPopularOption');
      setValueSearch('');
    }
  };

  useEffect(() => {
    if (valueSearch) {
      debounce(debounceFunc, 2000)(valueSearch);
    } else if (valueSelect === 'resentlyReleasedOption') {
      dispatch(getPopularMovies({ text: 'now_playing', page: numberPage }));
    } else if (valueSelect === 'ratingOption') {
      dispatch(getPopularMovies({ text: 'top_rated', page: numberPage }));
    } else {
      dispatch(getPopularMovies({ text: valueSearch, page: numberPage }));
    }

    // dispatch(getAllMovies({ search: valueSearch, page: pageSearch }));
  }, [dispatch, numberPage, valueSearch, valueSelect]);
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
