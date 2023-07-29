import { Link } from 'react-router-dom';

import style from './AppHeader.module.css';

// import ghost from '../../image/ghost.png';
import ghostTwo from '../../image/ghost1-2.png';

const AppHeader = () => {
  return (
    <header className={style.header}>
      <nav className={style.header__nav}>
        <div className={style.header__nav_link}>
          <div className={style.link__image}>
            <img className={style.link__image_img} src={ghostTwo} alt='иконка бодрого призрака' />
          </div>
          <Link to='/'>Home</Link>
        </div>
        <Link to='/contentFilm'>ContentFilm</Link>
        <Link to='/popularActors'>PopularActors</Link>
        <Link to='/contentActor'>ContentActor</Link>
      </nav>
    </header>
  );
};

export { AppHeader };
