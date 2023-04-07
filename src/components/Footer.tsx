import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";

import {
  EMAIL_URL,
  GITHUB_URL,
  GITHUB_USERNAME,
  LINKEDIN_URL,
} from "../consts";
import { atom } from "../styles";
import { container, copyright, icons } from "./Footer.css";

export const Footer = () => {
  return (
    <footer className={container}>
      <div className={icons}>
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
      <p className={copyright}>Made by {GITHUB_USERNAME}</p>
    </footer>
  );
};
