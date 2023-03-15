import Columns from "./components/Columns";
import Filter from "./components/Filter";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Filter />
      <Columns />
    </Layout>
  );
};

export default App;
