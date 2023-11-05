import React from "react";
import "./index.css";
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
    apiKey: string;
}
export declare const PersistaModal: ({ isOpen, actionId, endTimeoutDuration, onClose, apiKey, onPositiveResult, onNegativeResult, onResponse, }: ModalInterfaceProps) => React.JSX.Element;
export {};
