import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './AppHeader.module.css';

import ghostOne from '../../image/ghost1.png';
import ghostTwo from '../../image/ghost2.png';
import { clearTmdbActors } from '../../store/TMDBActorsSlice';

const AppHeader = () => {
  let [opacity, setOpacity] = useState<string>('opacity');
  let [dontOpacity, setDontOpacity] = useState<string>('');
  let dispatch = useDispatch<any>();
  const changeOpacity = () => {
    setOpacity('opacity');
    setDontOpacity('');
  };
  const changeOpacityTwo = () => {
    opacity && dispatch(clearTmdbActors());
    setOpacity('');
    setDontOpacity('opacity');
  };
  useEffect(() => {
    if (window.location.pathname === '/popularActors') {
      setOpacity('');
      setDontOpacity('opacity');
    } else {
      setOpacity('opacity');
      setDontOpacity('');
    }
  }, []);

  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <div className={style.header__nav_link + ' ' + style[opacity]}>
          <Link to='/' onClick={changeOpacity}>
            Home
          </Link>
          <div className={style.character + ' ' + style.link__image}>
            <img className={style.link__image_img} src={ghostOne} alt='иконка бодрого призрака' />
          </div>
        </div>
        <div className={style.header__nav_link + ' ' + style[dontOpacity]}>
          <Link to='/popularActors' onClick={changeOpacityTwo}>
            Популярные актеры
          </Link>
          <div className={style.character + ' ' + style.link__image}>
            <img className={style.link__image_img} src={ghostTwo} alt='иконка бодрого призрака' />
          </div>
        </div>
      </nav>
    </header>
  );
};

export { AppHeader };
