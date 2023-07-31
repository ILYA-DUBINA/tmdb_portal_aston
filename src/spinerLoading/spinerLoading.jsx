import { Alert, Spin } from 'antd';

import './spinerLoading.css';
import 'antd/dist/reset.css';
import ghost from '../image/ghost3.png';

export const SpinerLoading = () => (
  <div className='example'>
    <Spin tip='Loading...'>
      <Alert message='Alert message title' description='Further details about the context of this alert.' type='info' />
    </Spin>
  </div>
);
export const SpinerLoadingImage = () => (
  <div className='spiner'>
    <img class='spiner__image' src={ghost} alt='картинка призрака' />
    <Spin className='spiner__spin' tip='The image is loading... or the image is not'></Spin>
  </div>
);
