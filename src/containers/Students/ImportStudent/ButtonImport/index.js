import React, {useContext} from 'react'
import { Button, message  } from 'antd';

import { ModalContext } from '../../../../components/Modal/modalContext';
import { StudentContext } from '../../studentContext';

import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const IMPORT_STUDENTS_CREATE = gql`  
mutation CreateUsers($UserInput: [UserInput])
  {
    createUsers(users: $UserInput) 
    {      
        key: id, username, status, createdat
  	}
  }`;

const ButtonImportCreateStudents = (_) => {  
    const { handleOk } = useContext(ModalContext);
    const { users, setusers, usersImportList } = useContext(StudentContext);
    const [import_students_create] = useMutation(IMPORT_STUDENTS_CREATE); 

    const importUserList = async () => {   
        var UserInput = usersImportList;
        var countStudent = usersImportList.length;

        const import_user = await import_students_create({ variables: { UserInput: UserInput }  })
        .then(res => {    
            //console.log(res.data.createUsers);
            setusers(users.concat(res.data.createUsers));
            
            message
            .loading('Cargando..', 2.5)
            .then(() => message.success('Se han agregado '+ countStudent +' estudiantes con éxito', 2.5))
            
            handleOk();
        })
        .catch(err => {
            message.error(setTimeout(() => {
                'Inténtelo luego.'
            }, 300));
  
            return null;
        }); 
        //console.log(usersImportList);

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