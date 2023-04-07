import { Profile } from "./Profile";

export const LatestArticle = () => {
  return (
    <div style={{ display: "flex", marginTop: "24px" }}>
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Profile />
      </div>
    </div>
  );
};
