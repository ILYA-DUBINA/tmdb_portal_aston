import { useState } from 'react';

import style from './MainPage.module.css';

import { MainBody } from '../components/Main/MainBody';
import { MainFooter } from '../components/Main/MainFooter';
import { MainHead } from '../components/Main/MainHead';
import backgroundMainPage from '../image/backgroundMainPage.jpg';

const MainPage = () => {
  let [numberPage, setNumberPage] = useState(1);
  return (
    <div className={style.main}>
      <div className={style.main__image}>
        <img className={style.main__image_img} src={backgroundMainPage} alt='картинка фона' />
      </div>
      <MainHead numberPage={numberPage} />
      <MainBody />
      <MainFooter setNumberPage={setNumberPage} />
    </div>
  );
};

export { MainPage };
