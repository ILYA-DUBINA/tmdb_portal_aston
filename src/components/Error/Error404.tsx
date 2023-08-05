import style from './Error404.module.css';

import ghostError404 from '../../image/ghostError404.png';

export const Error404 = () => {
  return (
    <div className={style.error404}>
      <div className={style.error404__arrow}>
        <div></div>
      </div>
      <div className={style.error404__image}>
        <img className={style.error404__image_img} src={ghostError404} alt='картинка не понимающего призрака' />
      </div>
      <h2 className={style.error404__title}>Ошибка с вашей стороны, будте пожалуйста внимательны!</h2>
    </div>
  );
};
