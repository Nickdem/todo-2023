import { Outlet } from "react-router-dom";
import Columns from "../Columns";
import Filter from "../Filter";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <Filter />
          <Columns />
        </section>
      </main>
      <Outlet />
    </>
  );
};

export default Layout;
