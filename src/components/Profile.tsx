import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "../consts";
import { atom } from "../styles";
import { icons } from "./Footer.css";
import { container, image, profileName, text } from "./Profile.css";

export const Profile = () => {
  return (
    <div>
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

      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <a href={GITHUB_URL} target="_blank">
          <FaGithub className={atom.touchable} size={24} />
        </a>
        <a href={LINKEDIN_URL} target="_blank">
          <FaLinkedin className={atom.touchable} size={24} />
        </a>
        <a href={EMAIL_URL} target="_blank">
          <MdEmail className={atom.touchable} size={24} />
        </a>
      </div>
    </div>
  );
};
