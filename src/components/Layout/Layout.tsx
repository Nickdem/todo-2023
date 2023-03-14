import { ILayoutProps } from "../../utils/interfaces";
import Header from "../Header";

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>
        <section className="container">{children}</section>
      </main>
    </>
  );
};

export default Layout;
