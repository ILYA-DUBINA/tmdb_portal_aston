import React from 'react';

import style from './ErrorBoundary.module.css';

import ghostError from '../../image/ghostError.png';

interface StateType {
  isError: boolean;
  error: { error: string };
}

export default class ErrorBoundary extends React.Component<{}, StateType> {
  constructor(props: any) {
    super(props);
    this.state = { isError: false, error: { error: '' } };
  }

  static getDerivedStateFromError(error: object) {
    return { isError: true, error };
  }

  render() {
    let { isError, error } = this.state;
    let { children }: any = this.props;

    if (isError) {
      return (
        <div className={style.error}>
          <div className={style.error__image}>
            <img className={style.error__image_img} src={ghostError} alt='картинка не понимающего призрака' />
          </div>
          <h2 className={style.error__title}>Something went wrong!</h2>
          <p className={style.error__text}>{error?.error}</p>
        </div>
      );
    }
    return children;
  }
}
