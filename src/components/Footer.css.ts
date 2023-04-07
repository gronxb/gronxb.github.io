import { style } from "@vanilla-extract/css";
import { atom } from "../styles";

export const container = style([
  atom.wFull,
  atom.borderTop,
  atom.paddingVertical,
  atom.marginTop,
  atom.textCenter,
]);

export const icons = style([
  atom.wFull,
  atom.flexCenter,
  atom.gap,
  atom.smallMarginBottom,
]);

export const copyright = style([atom.smallText, atom.gray]);
