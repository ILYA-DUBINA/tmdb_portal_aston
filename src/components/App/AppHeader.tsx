import { Link } from 'react-router-dom';

import style from './AppHeader.module.css';

// import ghost from '../../image/ghost.png';
import ghostOne from '../../image/ghost1.png';
import ghostTwo from '../../image/ghost2.png';
// import ghostThree from '../../image/ghost3.png';
// import ghostFour from '../../image/ghost4.png';

const AppHeader = () => {
  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <div className={style.header__nav_link}>
          <Link to='/'>Home</Link>
          <div className={style.character + ' ' + style.link__image}>
            <img className={style.link__image_img} src={ghostOne} alt='иконка бодрого призрака' />
          </div>
        </div>
        <div className={style.header__nav_link}>
          <Link to='/contentFilm'>Популярные актеры</Link>
          <div className={style.character + ' ' + style.link__image}>
            <img className={style.link__image_img} src={ghostTwo} alt='иконка бодрого призрака' />
          </div>
        </div>
      </nav>
    </header>
  );
};

export { AppHeader };
