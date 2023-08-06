import moment from 'moment';
import React from 'react';

import style from './ContentActorHead.module.css';

interface Props {
  birthday: string;
  name: string;
}

export const ContentActorHead: React.FC<Props> = ({ birthday, name }) => {
  return (
    <div className={style.headeractor}>
      <h2 className={style.headeractor__title}>{name}</h2>
      <h4 className={style.headeractor__date}>{moment(birthday).format('MMMM D, YYYY')}</h4>
    </div>
  );
};
