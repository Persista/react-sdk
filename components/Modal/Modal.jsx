import React, { useRef, useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} style={{
      
      // padding: "2rem",
      position: "relative",
      boxShadow: "hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem",
      border: "2px solid black",
      borderRadius: "8px",
      padding: "12px",
    }}>
      {hasCloseBtn && (<button onClick={onClose} className="exit-button">X</button>)}
      {children}
    </dialog>
  );
};

export default Modal;
