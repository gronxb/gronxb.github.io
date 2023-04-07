import { container } from "./Layout.css";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return <main className={container}>{children}</main>;
};
