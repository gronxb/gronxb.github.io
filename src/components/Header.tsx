import { SITE_TITLE } from "../consts";

export const Header = () => {
  return (
    <header
      className="header"
      style={{
        background: "white",
        display: "flex",
        alignItems: "center",
        paddingLeft: "12px",
        paddingRight: "12px",
        width: "100%",
        left: 0,
        height: "50px",
        borderBottom: "1px solid #bfbfbf77",
        userSelect: "none",
      }}
    >
      <a
        className="header__title"
        style={{
          fontWeight: "bold",
          cursor: "pointer",
        }}
        href="/"
      >
        {SITE_TITLE}
      </a>
    </header>
  );
};
