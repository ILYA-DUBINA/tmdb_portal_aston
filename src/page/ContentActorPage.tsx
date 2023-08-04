import { useSelector } from 'react-redux';

import style from './ContentActorPage.module.css';

import { ContentActorBody } from '../components/ContentActor/ContentActorBody';
import { ContentActorFooter } from '../components/ContentActor/ContentActorFooter';
import { ContentActorHead } from '../components/ContentActor/ContentActorHead';

import backgroundContentActorPage from '../image/backgroundContentActorPage.png';

interface obj {
  biography: string;
  popularity: string;
  profile_path: string;
  place_of_birth: string;
  birthday: string;
  name: string;
}

const ContentActorPage = () => {
  let film: any = useSelector<any>((item) => item.tmdbActors.tmdbContentActor);
  let { biography, popularity, profile_path, place_of_birth, birthday, name }: obj = film;
  return (
    <div className={style.contentfilm}>
      <div className={style.contentfilm__image}>
        <img className={style.contentfilm__image_img} src={backgroundContentActorPage} alt='картинка фона' />
      </div>
      <ContentActorHead release_date={birthday} title={name} />
      <ContentActorBody poster_path={profile_path} overview={biography} />
      <ContentActorFooter popularity={popularity} production_companies={place_of_birth} />
    </div>
  );
};
export default ContentActorPage;
