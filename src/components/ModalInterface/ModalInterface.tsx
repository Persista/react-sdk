import React, { useState, useEffect } from "react";
import "./ModalInterface.css";
import Modal from "../Modal/Modal";
import { createChat, getLLMResponse } from "@persistajs/core";

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

const ModalInterface = ({
  isOpen,
  actionId,
  endTimeoutDuration = 2000,
  onClose = () => {},
  onPositiveResult = (res) => {},
  onNegativeResult = (res) => {},
  onResponse = (res) => {},
}: ModalInterfaceProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [chatId, setChatId] = useState("");
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      createChat(actionId).then((res) => {
        setQuery(res.data.response);
        setChatId(res.data.id);
        setUserAnswer("");
        setHasEnded(false);
        setIsLoading(false);
      });
    }
  }, [isOpen]);

  const getNextLLMResponse = () => {
    setIsResponseLoading(true);
    getLLMResponse(chatId, userAnswer).then((res) => {
      setIsResponseLoading(false);
      setQuery(res.data.response);
      setUserAnswer("");

      if (onResponse) {
        onResponse(res.data);
      }

      if (res.data.status === 1) {
        setHasEnded(true);
        onPositiveResult(res.data);
        setTimeout(() => {
          onClose();
        }, endTimeoutDuration);
        return;
      }

      if (res.data.status === -1) {
        setHasEnded(true);
        onNegativeResult(res.data);
        setTimeout(() => {
          onClose();
        }, endTimeoutDuration);
        return;
      }
    });
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      {isLoading ? (
        <div className="loader-contaier">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="container">
          <h3 className="heading"></h3>
          <p className="prompt-query">{isResponseLoading ? <span className="loader"></span> : query}</p>
          {!hasEnded && (
            <>
              <div className="text-area-container">
                <textarea
                  className="prompt-answer"
                  placeholder="Some text..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                ></textarea>
              </div>

              <div className="footer">
                <button className="submit-button" disabled={isResponseLoading} onClick={getNextLLMResponse}>
                  submit
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </Modal>
  );
};

export default ModalInterface;
