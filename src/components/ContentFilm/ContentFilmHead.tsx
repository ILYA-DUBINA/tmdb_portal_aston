import moment from 'moment';
import React from 'react';

import style from './ContentFilmHead.module.css';

interface Props {
  release_date: string;
  title: string;
  genres: Array<object>;
}
export const ContentFilmHead: React.FC<Props> = ({ release_date, title, genres }) => {
  return (
    <div className={style.headerfilm}>
      <h2 className={style.headerfilm__title}>{title}</h2>
      <h4 className={style.headerfilm__date}>{moment(release_date).format('MMMM D, YYYY')}</h4>
      <div className={style.headerfilm__ganre}>
        {genres?.map((item: any) => {
          return <span key={item.id}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};
