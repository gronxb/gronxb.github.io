export const Tag = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        width: "100%",
        gap: "12px",
        paddingTop: "18px",
        paddingBottom: "18px",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

Tag.Item = ({
  name = "123123",
  active,
}: {
  name?: string;
  active?: boolean;
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        marginRight: "8px",
        marginTop: "4px",
        marginBottom: "4px",
        paddingLeft: "14px",
        paddingRight: "14px",
        paddingTop: "8px",
        paddingBottom: "8px",
        color: "#111",
        boxShadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        border: "2px solid #111",
        borderRadius: "16px",
        fontSize: "14px",
        fontWeight: "bold",
        userSelect: "none",
        cursor: "pointer",

        ...(active && {
          background: "black",
          color: "white",
        }),
      }}
    >
      {name}
    </div>
  );
};
