import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { IModalProps } from "../../utils/interfaces";
import styles from "./Modal.module.css";

const Modal = ({ children }: IModalProps) => {
  const navigate = useNavigate();

  return createPortal(
    <>
      <div className={styles.modal} data-testid="modal">
        {children}
        <Button
          text="x"
          testid="modal-close"
          cls={styles["modal-close"]}
          clickHandler={() => navigate("/")}
        />
      </div>
      <div
        className={styles["modal-backdrop"]}
        onClick={() => navigate("/")}
        data-testid="backdrop"
      ></div>
    </>,
    document.body,
  );
};

export default Modal;
