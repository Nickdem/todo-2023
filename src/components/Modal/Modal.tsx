import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { IModalProps } from "../../utils/interfaces";
import Button from "../Button";

const Modal = ({ children, isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;
  return createPortal(
    <>
      <div className={styles.modal} data-testid="modal">
        {children}
        <Button
          text="x"
          testid="modal-close"
          cls={styles["modal-close"]}
          clickHandler={onClose}
        />
      </div>
      <div
        className={styles["modal-backdrop"]}
        onClick={() => onClose()}
        data-testid="backdrop"
      ></div>
    </>,
    document.body,
  );
};

export default Modal;
