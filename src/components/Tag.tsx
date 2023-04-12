export const Tag = ({ children }: React.PropsWithChildren) => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "12px",
        paddingTop: "12px",
        paddingBottom: "12px",
      }}
    >
      {children}
    </nav>
  );
};

Tag.Item = () => {
  return (
    <div
      style={{
        userSelect: "none",
        cursor: "pointer",
        paddingTop: "4px",
        paddingBottom: "4px",
        paddingLeft: "8px",
        paddingRight: "8px",
        background: "#6495ed",
        display: "inline-block",
        color: "white",
        borderRadius: "8px",
      }}
    >
      asd
    </div>
  );
};
