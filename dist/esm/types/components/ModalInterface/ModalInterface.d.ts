/// <reference types="react" />
import "./ModalInterface.css";
interface AIResponse {
    response: string;
    status: -1 | 0 | 1;
    sentiment_score: number;
}
interface ModalInterfaceProps {
    isOpen: boolean;
    actionId: string;
    onClose: () => void;
    onPositiveResult: (res: AIResponse) => void;
    onNegativeResult: (res: AIResponse) => void;
    endTimeoutDuration?: number;
    onResponse?: (res: AIResponse) => void;
}
declare const ModalInterface: ({ isOpen, actionId, endTimeoutDuration, onClose, onPositiveResult, onNegativeResult, onResponse, }: ModalInterfaceProps) => JSX.Element;
export default ModalInterface;
