import { useState } from 'react';

import style from './MainHead.module.css';

import ghostFour from '../../image/ghost4.png';
import searchGhost from '../../image/search.png';

const MainHead = () => {
  let [show, setShow] = useState('hidden');
  const getShowClick = (e: any) => {
    e.preventDefault();
    setShow((show) => {
      if (show === 'visible') return 'hidden';
      return 'visible';
    });
  };
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
        <input className={style.input__text} type='text' id='main__search' />
      </div>
      <div className={style.main__search_select + ' ' + style[show]}>
        <label className={style.input__label} htmlFor='select__content'>
          Выберите категорию поиска
        </label>
        <select className={style.select__content} id='select__content'>
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
