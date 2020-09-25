import React, { useState } from 'react';
import useModal from './useModal';
import Dialog from './Dialog';

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

const ModalProvider = ({ children }) => {
    let {  
        modal, 
        handleOk,
        handleCancel,
        handleModal, 
        modalContent 
    } = useModal();
  return (
    <Provider value={{ modal, handleOk, handleCancel, handleModal, modalContent }}>
      <Dialog />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };