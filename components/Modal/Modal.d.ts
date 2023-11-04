import React from "react";

interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  apiKey?: string | null;
  actionId?: string;
}

declare const Modal: React.FC<ModalProps>;
export default Modal;
