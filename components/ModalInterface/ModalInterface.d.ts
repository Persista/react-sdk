import React from "react";

interface ModalInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  actionId: string;
  context: string;
  setContext: React.Dispatch<React.SetStateAction<{ AI: string[]; User: string[] }>>;
}

declare const ModalInterface: React.FC<ModalInterfaceProps>;
export default ModalInterface;
