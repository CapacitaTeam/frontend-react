import React, { useState } from 'react'

export default () => {
    
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleOk = e =>  {
        setModal(false);
    };

    const handleCancel = e => {
        setModal(false); 
    };

    let handleModal = (content = false) => {
        setModal(!modal); 
        if (content) {
            setModalContent(content);
        }
    };

  return { 
      modal, 
      handleOk,
      handleCancel,
      handleModal, 
      modalContent 
    };
};
