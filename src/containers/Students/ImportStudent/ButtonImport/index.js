import React, {useContext} from 'react'
//antd Component
import Button from "antd/lib/button";
import message from "antd/lib/message";
//Context
import { ModalContext } from '../../../../components/Modal/modalContext';
import { StudentContext } from '../../studentContext';
//Graphql
import { UserMutations } from '../../../../graphql';
import { gql } from 'apollo-boost';
import {  useMutation } from '@apollo/react-hooks';

const { IMPORT_STUDENTS_CREATE } = UserMutations;

const ButtonImportCreateStudents = (_) => {  
    const { handleOk } = useContext(ModalContext);
    const { users, setusers, usersImportList } = useContext(StudentContext);
    const [import_students_create] = useMutation(IMPORT_STUDENTS_CREATE); 

    const importUserList = async () => {   
        var UserInput = usersImportList;
        var countStudent = usersImportList.length;

        const import_user = await import_students_create({ variables: { UserInput: UserInput }  })
        .then(res => {    
            setusers(users.concat(res.data.createUsers));            
            message
            .loading('Cargando..', 2.5)
            .then(() => message.success('Se han agregado '+ countStudent +' estudiantes con éxito', 2.5))            
            handleOk();
        })
        .catch(err => {
            message.error(err.message);  
            return null;
        }); 

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