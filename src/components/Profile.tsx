import { atom } from "../styles";
import { container, image, profileName, text } from "./Profile.css";

export const Profile = () => {
  return (
    <div className={container}>
      <img
        className={image}
        src="https://avatars2.githubusercontent.com/u/41789633?s=460&u=78fa3dc9f8cabfc341f994074aac031e249e1ae3&v=4"
      />
      <div className={atom.flexCol}>
        <h2 className={profileName}>강선규</h2>
        <p className={text}>프론트엔드 엔지니어</p>
      </div>
    </div>
  );
};
