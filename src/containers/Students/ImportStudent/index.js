import React, { useState, useContext } from 'react'
import { FileExcelTwoTone} from '@ant-design/icons';
//antd Component
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Upload from "antd/lib/upload";
import message from "antd/lib/message"
// parser
import papaParse from 'papaparse';
import { StudentContext } from '../studentContext';
  
const ImportStudent = (props) => {
    const { setusersImportList } = useContext(StudentContext);
    const { Dragger } = Upload;
    const [fileList,setFileList] = useState([]);


  const onUploadFile = (file) => {
    var students = papaParse.parse(file,{
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setFileList([file]);
            result.data.forEach(function(e){
              if (typeof e === "object" ){
                e["status"] = true
                e["id_role"] = 3
              }
            });
            setusersImportList(result.data);
          }
      });
      return false;
  };

  const onChangeFile = (info) => {
      const { status } = info.file;
      if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
      }
  };

  const propsUpload = {
      fileList,
      multiple: false,
      accept: '.csv',
      onChange(info) {onChangeFile(info)},
      beforeUpload: onUploadFile,
      showUploadList: {
          showPreviewIcon: false,
          showRemoveIcon: false
      }
  };
 
    return (
        <>      
            <Row>
                <Col span={24}>
                    <Dragger {...propsUpload}>
                        <p className="ant-upload-drag-icon">
                            <FileExcelTwoTone twoToneColor="#1d951a"/>
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