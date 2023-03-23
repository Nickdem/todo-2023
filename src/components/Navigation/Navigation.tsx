import { Link } from "react-router-dom";
import Button from "../Button";
import { navigationList } from "../../utils/consts";
import { useAppDispatch, useAppSelector } from "../../store";
import { logoutUserName } from "../../store/auth/authSlice";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const name = useAppSelector((state) => state.auth.name);
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
