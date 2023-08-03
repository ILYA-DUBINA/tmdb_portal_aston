import { Pagination } from 'antd';
// import 'antd/dist/reset.css';
import { useSelector } from 'react-redux';

import style from './MainFooter.module.css';
interface Props {
  setNumberPage: Function;
}
const MainFooter: React.FC<Props> = (props: Props) => {
  let { setNumberPage } = props;
  let numberTotal = useSelector((item: any) => item.tmdb.totalElements);
  // console.log(array);
  return (
    <div className={style.pagination}>
      <Pagination
        total={numberTotal}
        pageSize={20}
        onChange={(page) => {
          setNumberPage(page);
        }}
      />
    </div>
  );
};

export { MainFooter };
