// import debounce from 'lodash';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import style from './ActorsHead.module.css';

import ghostFour from '../../image/ghost4.png';
import searchGhost from '../../image/search.png';
import { getPopularActors, getSearchArrayActors } from '../../store/TMDBActorsSlice';
import { debounce } from '../../utils/function';

// type objValue = {
//   search: string,
//   page: number
// };
interface Props {
  setPageValue: Function;
}

const ActorsHead: React.FC<Props> = (props) => {
  let { setPageValue } = props;
  let [show, setShow] = useState('hidden');
  let [valueSearch, setValueSearch] = useState<string>('');
  let [pageSearch, setPageSearch] = useState<number>(1);
  // let [valueSelect, setValueSelect] = useState<string>('currentPopularOption');
  const dispatch = useDispatch<any>();
  // let debounceFunc = debounce(dispatch(getSearchArrayActors), 1000);
  // dispatch(
  //   getSearchArrayActors({
  //     search: text,
  //     page: pageSearch,
  //   }),
  // );
  // };
  const getValueInput = (e: any) => {
    console.log(e.target.value);

    if (e.target.value) {
      dispatch(
        getSearchArrayActors({
          search: e.target.value,
          page: pageSearch,
        }),
      );
      setValueSearch(e.target.value);
      setPageValue(e.target.value);
    }
    setValueSearch(e.target.value);
  };
  const getKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      // debounce(debounceFunc, 2000)(valueSearch);
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

  // useEffect(() => {
  //   dispatch(
  //     debounceFunc({
  //       search: valueSearch,
  //       page: pageSearch,
  //     }),
  // );
  //   if (valueSearch) {
  //     debounce(debounceFunc, 2000)(valueSearch);
  //   } else {
  //     dispatch(getPopularActors({ page: pageSearch }));
  //   }
  // window.location.reload();
  // dispatch(getAllMovies({ search: valueSearch, page: pageSearch }));
  // }, [valueSearch]);

  const debouncedChangeHandler = debounce(getValueInput, 1000);
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
          onChange={debouncedChangeHandler}
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
