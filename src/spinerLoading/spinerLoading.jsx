import { Alert, Spin } from 'antd';

import style from './spinerLoading.module.css';

import 'antd/dist/reset.css';
import ghost from '../image/ghost3.png';

export const SpinerLoading = () => (
  <div className={style.loading}>
    <Spin>
      <h4 className={style.loading__title}>Loading...</h4>
      <Alert message='Alert message title' description='Further details about the context of this alert.' type='info' />
    </Spin>
  </div>
);
export const SpinerLoadingImage = () => (
  <div className={style.spiner}>
    <img className={style.spiner__image} src={ghost} alt='картинка призрака' />
    <Spin>
      <span className={style.spiner__spin_text}>The image is loading... or the image is not</span>
    </Spin>
  </div>
);
