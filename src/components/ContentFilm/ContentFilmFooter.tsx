import React from 'react';

import style from './ContentFilmFooter.module.css';

interface Props {
  budget: number;
  popularity: string;
  production_companies: Array<object>;
}
type obj = {
  id?: number;
  name?: string;
};
export const ContentFilmFooter: React.FC<Props> = ({ budget, popularity, production_companies }) => {
  return (
    <div className={style.footer}>
      <div className={style.footer__rating}>Рейтинг: &#9885; {popularity}</div>
      <div className={style.footer__budget}>Бюджет: {budget}$</div>
      <div className={style.footer__make}>
        Компании производители:
        {production_companies?.map((item: obj) => {
          return <span key={item.id}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};
