import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { ModalContext } from './modalContext';

const Dialog = () => {
    const { modal, handleOk, handleCancel, modalContent } = React.useContext(ModalContext);
    if (modal) {
      return (          
        <>    
            <Modal 
                title={modalContent.title}
                visible={modal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Cancelar
                  </Button>,
                  <Button key="submit" htmlType="submit" type="primary" onClick={handleOk}>
                    Agregar
                  </Button>,
                ]}
            >
              {modalContent.Content}
            </Modal>
        </>
      );
    } else return null;
  };
  
  export default Dialog;