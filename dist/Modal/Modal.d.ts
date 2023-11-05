import React from "react";
import "./Modal.css";
interface ModalProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    apiKey?: string | null;
    actionId?: string;
    children: React.ReactNode;
}
declare const Modal: ({ isOpen, hasCloseBtn, onClose, children, apiKey, actionId }: ModalProps) => React.JSX.Element;
export default Modal;
