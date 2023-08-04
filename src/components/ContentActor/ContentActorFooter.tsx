import React from 'react';

import style from './ContentActorFooter.module.css';

interface Props {
  budget: number;
  popularity: string;
  production_companies: Array<object>;
}

export const ContentActorFooter: React.FC<Props> = ({ budget, popularity, production_companies }) => {
  return (
    <div className={style.footer}>
      <div className={style.footer__rating}>&#9885; {popularity}</div>
      <div className={style.footer__budget}>{budget}$</div>
      <div className={style.footer__make}>
        {production_companies?.map((item: any) => {
          return <span key={item.id}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};
