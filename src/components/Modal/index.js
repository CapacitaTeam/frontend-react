import React, { useState } from 'react'
import { Modal, Button, Form  } from 'antd';

function Dialog(props){

    const {       
        dialog,
        button
      } = props
    
    const [visible, setVisible] = useState(false); 

    function showModal() {        
        setVisible(true);     
    };
    
    function handleOk(e) {
        setVisible(false);
    };
    
    function handleCancel(e) {
        setVisible(false);
    };

    return (        
        <>    
            <Button Button icon={button.icon} type="primary" onClick={showModal}>
                {button.text}
            </Button>
            <Modal 
                title={dialog.title}
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
               {dialog.FormContent}
            </Modal>
        </>
    )

}




export default Dialog;