import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { ModalContext } from './modalContext';

const Dialog = () => {
    const { modal, handleOk, handleCancel, modalContent } = React.useContext(ModalContext);
    if (modal) {
      return (          
        <>    
            <Modal 
                title={modalContent.Title}
                visible={modal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={modalContent.Footer}
            >
              {modalContent.Content}
            </Modal>
        </>
      );
    } else return null;
  };
  
  export default Dialog;