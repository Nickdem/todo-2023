import Filter from "./components/Filter";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Filter />
      <div className="list">list(columns)</div>
    </Layout>
  );
};

export default App;
