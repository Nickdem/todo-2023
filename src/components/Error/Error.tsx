import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles["error-title"]}>Oops!</h1>
      <p className={styles["error-text"]}>
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
};

export default Error;
