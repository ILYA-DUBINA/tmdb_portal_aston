import React from 'react';

import style from './ContentActorFooter.module.css';

interface Props {
  popularity: string;
  production_companies: string;
}

export const ContentActorFooter: React.FC<Props> = ({ popularity, production_companies }) => {
  return (
    <div className={style.footer}>
      <div className={style.footer__rating}>&#9885; {popularity}</div>
      <div className={style.footer__make}>{production_companies}</div>
    </div>
  );
};
