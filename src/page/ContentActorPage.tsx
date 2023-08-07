import { useSelector } from 'react-redux';

import style from './ContentActorPage.module.css';

import { ContentActorBody } from '../components/ContentActor/ContentActorBody';
import { ContentActorFooter } from '../components/ContentActor/ContentActorFooter';
import { ContentActorHead } from '../components/ContentActor/ContentActorHead';

import backgroundContentActorPage from '../image/backgroundContentActorPage.jpg';

interface obj {
  biography: string;
  popularity: string;
  profile_path: string;
  place_of_birth: string;
  birthday: string;
  name: string;
}

const ContentActorPage = () => {
  let actors: any = useSelector<any>((item) => item.tmdbActors.tmdbContentActor);
  let { biography, popularity, profile_path, place_of_birth, birthday, name }: obj = actors;
  return (
    <div className={style.contentactor}>
      <div className={style.contentactor__image}>
        <img className={style.contentactor__image_img} src={backgroundContentActorPage} alt='картинка фона' />
      </div>
      <ContentActorHead birthday={birthday} name={name} />
      <ContentActorBody profile_path={profile_path} biography={biography} />
      <ContentActorFooter popularity={popularity} place_of_birth={place_of_birth} />
    </div>
  );
};
export default ContentActorPage;
