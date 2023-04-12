export const PostList = () => {
  return (
    <div>
      <div style={{ display: "inline-flex", gap: "12px", flex: 1 }}>
        {[0, 1, 2].map((v) => (
          <div style={{ width: "100%" }}>
            <img
              src="https://picsum.photos/300"
              style={{
                width: "100%",
                border: "1px solid #eee",
                borderRadius: "4px",
              }}
            />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.25rem",
                marginTop: "4px",
              }}
            >
              PNPM에서 모노레포 구축하기 (feat. PNPM, turbo)
            </p>
            <p
              style={{
                marginTop: "4px",
                marginBottom: "12px",
                fontSize: "12px",
              }}
            >
              2023/04/12
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
