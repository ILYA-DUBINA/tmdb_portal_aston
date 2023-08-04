import style from './MainBody.module.css';
import { MainBodyMapItem } from './MainBodyMap/MainBodyMapItem';

const MainBody = () => {
  return (
    <div className={style.main__body}>
      <MainBodyMapItem />
    </div>
  );
};

export { MainBody };
