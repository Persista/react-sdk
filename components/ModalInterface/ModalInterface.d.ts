import React from "react";

interface AIResponse {
  response: string;
  status: -1 | 0 | 1;
  sentiment_score: number;
};

interface ModalInterfaceProps {
  isOpen: boolean;
  actionId: string;
  onClose: () => void;
  onPositiveResult: (res: AIResponse) => void;
  onNegativeResult: (res: AIResponse) => void;
  endTimeoutDuration?: number;
  onResponse?: (res: AIResponse) => void;
}

declare const ModalInterface: React.FC<ModalInterfaceProps>;
export default ModalInterface;
