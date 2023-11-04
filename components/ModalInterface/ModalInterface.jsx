import React, { useState, useEffect, useRef } from "react";
import "./ModalInterface.css";
import Modal from "../Modal/Modal";
import { getFirstQuery, getLLMResponse } from "../../../js-core";

const ModalInterface = ({ isOpen, onClose, actionId, context, setContext }) => {
  const [query, setQuery] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  useEffect(() => {
    if(isOpen) {
      getFirstQuery(actionId).then
      (res => {
        setQuery(res.data.result)
        setUserAnswer("");
      })
    }
  }, [isOpen]);

  const getNextLLMResponse = () => {
    getLLMResponse(actionoId, context, query, userAnswer).then((res) => {
      setContext((prevContext) => {
        let newContext = { ...prevContext };
        newContext.AI.push(query);
        newContext.User.push(userAnswer);
        return newContext;s
      });
      setQuery(res.data.data);
      setUserAnswer("");
    })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // onSubmit(formState);
    // setFormState(initialModalInterfaceData);
  };

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <div className="container">
        
        <h3 className="heading">Heading</h3>
        <p className="prompt-query">
          Lorem ipsum gypsyum wijafoiewja oiwejf oiajewoij oiewj foeiwjf
          oiewjaoi jeoiweafj oijwefa oijaweoif jowiafj oiwjef oiwj?
        </p>
        <div className="text-area-container">
          <textarea
            className="prompt-answer"
            placeholder="Some text..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          ></textarea>
        </div>

        <div className="footer">
          <button className="submit-button" 
          onClick={getNextLLMResponse}
          >submit</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalInterface;
