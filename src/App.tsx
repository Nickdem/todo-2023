import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import { AuthForm, TodoForm } from "./components/Form";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="signin"
          element={
            <Modal>
              <AuthForm />
            </Modal>
          }
        />
        <Route
          path="signup"
          element={
            <Modal>
              <AuthForm />
            </Modal>
          }
        />
        <Route
          path="edit/:id"
          element={
            <Modal>
              <TodoForm />
            </Modal>
          }
        />
        <Route
          path="*"
          element={
            <Modal>
              <Error />
            </Modal>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
