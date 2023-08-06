import { Spin } from 'antd';

import style from './spinerLoading.module.css';

import ghost from '../image/ghost3.png';
import ghostLoading from '../image/ghostLoading.png';
import ghostLoading2 from '../image/ghostLoading2.png';

import 'antd/dist/reset.css';

export const SpinerLoading = () => (
  <div className={style.loading}>
    <img className={style.loading__imageOne} src={ghostLoading} alt='картинка призрака' />

    <h4 className={style.loading__title}>
      Loading...<Spin></Spin>
    </h4>

    <img className={style.loading__imageTwo} src={ghostLoading2} alt='картинка призрака' />
  </div>
);
export const SpinerLoadingImage = () => (
  <div className={style.spiner}>
    <img className={style.spiner__image} src={ghost} alt='картинка призрака' />
    <Spin></Spin>
    <span className={style.spiner__spin_text}>The image is loading... or the image is not</span>
  </div>
);
