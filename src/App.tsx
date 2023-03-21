import { Route, Routes } from "react-router-dom";
import { ErrorComponent } from "./components/Error/Error";
import { AuthForm, TodoForm } from "./components/Form";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import { useAppDispatch } from "./store";
import { getAuthName } from "./store/auth/authSlice";

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(getAuthName());
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
              <ErrorComponent />
            </Modal>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
