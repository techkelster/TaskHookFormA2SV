import React from "react";
import "./css/modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  email: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  name,
  email,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Submitted Data</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
