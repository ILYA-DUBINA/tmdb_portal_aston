import React from 'react';

import style from './ContentActorFooter.module.css';

interface Props {
  popularity: string;
  place_of_birth: string;
}

export const ContentActorFooter: React.FC<Props> = ({ popularity, place_of_birth }) => {
  return (
    <div className={style.footer}>
      <div className={style.footer__rating}>Рейтинг популярности: &#9885; {popularity}</div>
      {place_of_birth ? <div className={style.footer__make}>Место рождения: {place_of_birth} </div> : null}
    </div>
  );
};
