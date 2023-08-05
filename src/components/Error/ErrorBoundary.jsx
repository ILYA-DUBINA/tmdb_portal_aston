import React from 'react';

import style from './ErrorBoundary.module.css';

import ghostError from '../../image/ghostError.png';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { isError: true, error };
  }

  render() {
    let { isError, error } = this.state;
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
    return this.props.children;
  }
}
