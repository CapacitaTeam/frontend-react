import React, { useState } from 'react'
import { Row, Col, Upload, message    } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;


const props = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} Archivo cargado con éxito.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} Falló la importación del archivo.`);
      }
    },
  };
  
 
const ImportStudent = (props) => {
    return (
        <>      
            <Row>
                <Col span={24}>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Haga clic o arrastre el archivo a esta área para cargar</p>
                        <p className="ant-upload-hint">
                            Soporte para una carga única o masiva
                        </p>
                    </Dragger>
                </Col>
            </Row>
          
        </>
    )
}
export default ImportStudent;