import moment from 'moment';
import React from 'react';

import style from './ContentActorHead.module.css';

interface Props {
  release_date: string;
  title: string;
}
export const ContentActorHead: React.FC<Props> = ({ release_date, title }) => {
  return (
    <div className={style.headerfilm}>
      <h2 className={style.headerfilm__title}>{title}</h2>
      <h4 className={style.headerfilm__date}>{moment(release_date).format('MMMM D, YYYY')}</h4>
    </div>
  );
};
