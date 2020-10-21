import React, {useContext} from 'react'
import { Button  } from 'antd';
import { StudentContext } from '../../studentContext';

const ButtonImportCreateStudents = (_) => {  
    const { usersImportList } = useContext(StudentContext);

    const importUserList = () => {     
         console.log(usersImportList);
     };

    return (
        <> 
            <Button type="primary" onClick={() => importUserList()} >
                Importar
            </Button>,
        </>     
    )                                    
               
  };    
  export default ButtonImportCreateStudents;