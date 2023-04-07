import { style } from "@vanilla-extract/css";
import { atom, vars } from "../styles";

export const container = style([atom.flexInlineBlock, atom.gap]);

export const profileName = style([atom.bold, atom.title]);

export const profileSize = style({
  width: "4.5rem",
  height: "4.5rem",
});

export const image = style([atom.circle, profileSize]);

export const text = style({
  fontSize: "14px",
});
