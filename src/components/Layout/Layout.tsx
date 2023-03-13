import Header from "../Header";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
