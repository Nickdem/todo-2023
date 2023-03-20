import { Component, ErrorInfo, ReactNode } from "react";
import styles from "./Error.module.css";

export const ErrorComponent = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles["error-title"]}>Oops!</h1>
      <p className={styles["error-text"]}>
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
};

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    console.log(_);

    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
