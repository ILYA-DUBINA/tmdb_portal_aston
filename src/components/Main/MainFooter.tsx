import { Pagination } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import style from './MainFooter.module.css';

interface Props {
  setNumberPage: Function;
}

export const MainFooter: React.FC<Props> = (props: Props) => {
  let { setNumberPage } = props;
  let [pageOneTime, setPageOneTime] = useState<number>(1);
  let { totalElements, error } = useSelector(
    (item: { tmdb: { totalElements: number; error: { message: string } } }) => item.tmdb,
  );
  return (
    <>
      <div className={style.pagination}>
        <Pagination
          total={totalElements}
          pageSize={20}
          onChange={(page) => {
            setPageOneTime(page);
            setNumberPage(page);
          }}
          current={pageOneTime}
        />
      </div>
      {error?.message ? (
        <div className={style.pagination__error}>
          <span>Ошибка сервера, нет соответсвующего контента. {error?.message}</span>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
