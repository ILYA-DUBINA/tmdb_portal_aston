// import { useState, useEffect } from 'react';

import style from './MainBody.module.css';
import { MainBodyMapItem } from './MainBodyMap/MainBodyMapItem';

// import SwapiService from '../../server/setver';

const MainBody = () => {
  // let [state, setState] = useState(null);
  // useEffect(() => {
  //   SwapiService().then((data) => console.log(data));
  // }, []);

  return (
    <div className={style.main__body}>
      <MainBodyMapItem />
    </div>
  );
};

export { MainBody };
