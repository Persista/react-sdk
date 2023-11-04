import React, { useState, useEffect, useRef } from "react";
import "./ModalInterface.css";
import Modal from "../Modal/Modal";

const ModalInterface = ({ onSubmit, isOpen, onClose }) => {
  const focusInputRef = useRef(null);
  
  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        if (focusInputRef.current) focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);

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
          ></textarea>
        </div>

        <div className="footer">
          <button className="submit-button">submit</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalInterface;
