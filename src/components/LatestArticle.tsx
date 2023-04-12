import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "../consts";
import { atom } from "../styles";
import { icons } from "./Footer.css";
import { Profile } from "./Profile";

export const LatestArticle = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "inline-flex", gap: "12px", flex: 1 }}>
        {[0].map((v) => (
          <div style={{ width: "100%" }}>
            <img src="https://picsum.photos/300" style={{ width: "100%" }} />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.25rem",
                textAlign: "center",
                marginTop: "12px",
                marginBottom: "12px",
              }}
            >
              PNPM에서 모노레포 구축하기
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-56px",
        }}
      >
        <Profile />
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
      </div>
    </div>
  );
};
