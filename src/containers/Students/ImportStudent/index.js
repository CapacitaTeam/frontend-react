import React, { useState, useContext } from 'react'
import { FileExcelTwoTone} from '@ant-design/icons';
//antd Component
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Spin from "antd/lib/spin";
import Upload from "antd/lib/upload";
import Icon from "antd/lib/icon";
import message from "antd/lib/message"
import Popover from "antd/lib/popover";
import Card from "antd/lib/card";
import Statistic from "antd/lib/statistic";
import Alert from "antd/lib/alert";
// helpers
import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';
// parser
import papaParse from 'papaparse';
import remove from 'lodash/remove';
import flattenDeep from 'lodash/flattenDeep';
import { StudentContext } from '../studentContext';



/*const props = {
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
  };*/
  
 
const ImportStudent = (props) => {
    const { usersList, setusersList } = useContext(StudentContext);

    /*useImperativeHandle(ref, () => ({
        list: fileList
    }));*/

    const {contentFooterResult, displayDefaultFooter} = props;
    const { Dragger } = Upload;
    const [fileList,setFileList] = useState([]);
    //const [userList,setuserList] = useState([]);

  
    const setDevices = (data,fields) => {
      if (!isEmpty(data) && !isEmpty(fields)){
          let values = [];
          data.map((item) => {             
              values.push(item);
          });
          setusersList(values);
          //console.log(usersList);
          const variables = {list:values}
          //console.log(variables);
          fetch({variables});
      }
    };

  const onUploadFile = (file) => {
    var students = papaParse.parse(file,{
          header: true,
          complete: (result) => {
            setFileList([file]);        
            setDevices(remove(flattenDeep(result.data)),result.meta.fields);
          }
      });
      return false;
  };

  const onChangeFile = (info) => {
     //console.log(info.fileList);
      const { status } = info.file;
      if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
      }
      //console.log(userList);
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