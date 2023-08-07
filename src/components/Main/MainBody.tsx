import style from './MainBody.module.css';
import { MainBodyMapItem } from './MainBodyMap/MainBodyMapItem';

export const MainBody = () => {
  return (
    <div className={style.main__body}>
      <MainBodyMapItem />
    </div>
  );
};
