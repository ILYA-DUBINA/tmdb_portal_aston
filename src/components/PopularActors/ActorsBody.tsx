import style from './ActorsBody.module.css';

import { ActorsBodyMapItem } from './ActorsBodyMap/ActorsBodyMapItem';

const ActorsBody = () => {
  return <div className={style.main__body}>{<ActorsBodyMapItem />}</div>;
};

export { ActorsBody };
