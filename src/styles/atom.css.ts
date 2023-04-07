import { createTheme, style, styleVariants } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    black: "#111",
    gray: "#999",
    white: "#fff",
  },
  space: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
});

export const atom = {
  bold: style({
    fontWeight: "bold",
  }),
  circle: style({
    borderRadius: "50%",
  }),
  flex: style({
    display: "flex",
  }),
  flexInlineBlock: style({
    display: "inline-flex",
  }),
  flexCenter: style({
    display: "inline-flex",
    justifyContent: "center",
  }),
  textCenter: style({
    textAlign: "center",
  }),
  flexCol: style({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  }),
  title: style({
    fontSize: "1.15rem",
    marginBottom: "0.175rem",
  }),
  touchable: style({
    cursor: "pointer",
    transition: "opacity 0.4s",
    ":hover": {
      opacity: 0.5,
    },
  }),
  wFull: style({
    width: "100%",
  }),
  hFull: style({
    height: "100%",
  }),
  borderBottom: style({
    borderBottom: "1px solid #eaeaea",
  }),
  borderTop: style({
    borderTop: "1px solid #eaeaea",
  }),
  gap: style({
    gap: vars.space.medium,
  }),
  paddingVertical: style({
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }),
  marginTop: style({
    marginTop: "1rem",
  }),
  smallMarginBottom: style({
    marginBottom: vars.space.small,
  }),
  gray: style({
    color: vars.color.gray,
  }),
  smallText: style({
    fontSize: "0.75rem",
  }),
};
