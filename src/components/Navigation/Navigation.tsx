import { Link } from "react-router-dom";
import Button from "../Button";
import { navigationList, todosValues } from "../../utils/consts";
import { useAppDispatch, useAppSelector } from "../../store";
import { logoutUserName } from "../../store/auth/authSlice";
import styles from "./Navigation.module.css";
import { setAllTodos } from "../../store/todos/todosSlice";

const Navigation = () => {
  const name = useAppSelector((state) => state.auth.currName);
  const dispatch = useAppDispatch();

  return (
    <nav className={styles.navigation} data-testid="nav">
      <ul className={styles["navigation-list"]} data-testid="nav-list">
        {name ? (
          <li className={styles["navigation-item"]}>
            <Button
              testid="exit-btn"
              text={`Выйти из аккаунта(${name})`}
              clickHandler={() => {
                dispatch(logoutUserName());
                dispatch(setAllTodos(todosValues));
              }}
              cls={styles["navigation-btn"]}
            />
          </li>
        ) : (
          navigationList.map((item) => (
            <li className={styles["navigation-item"]} key={item.href}>
              <Link
                className={styles["navigation-link"]}
                to={`sign/${item.href}`}
                data-testid="nav-link"
              >
                {item.text}
              </Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
