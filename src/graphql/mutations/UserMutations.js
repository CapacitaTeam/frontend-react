import { gql, NetworkStatus } from 'apollo-boost';

const STUDENT_CREATE = gql`  
    mutation CreateUser ($firstname: String!, $lastname: String!, $username: String!, $status: Boolean!, $id_role: Int! ) 
    {
        createUser(firstname: $firstname, lastname: $lastname, username: $username, status: $status, id_role: $id_role)
        {
            key: id, username, status, createdat
        }
    }`;

const IMPORT_STUDENTS_CREATE = gql`  
    mutation CreateUsers($UserInput: [UserInput])
    {
        createUsers(users: $UserInput) 
        {      
            key: id, username, status, createdat
        }
    }`;

const STUDENT_UPDATE= gql`  
    mutation UpdateUser ($id: Int!, $firstname: String!, $lastname: String!, $status: Boolean!) 
    {
        updateUser(id: $id, firstname: $firstname, lastname: $lastname, status: $status)
        {
            key: id, username, status, createdat
        }
    }`;

const STATUS_STUDENT_UPDATE= gql`  
    mutation UpdateStatusUser ($id: Int!, $status: Boolean!) 
    {
        updateStatusUser(id: $id, status: $status)
        {
            key: id, status
        }
    }`;




const UserMutations = {
    STUDENT_CREATE,
    IMPORT_STUDENTS_CREATE,
    STUDENT_UPDATE,
    STATUS_STUDENT_UPDATE
};
    
export default UserMutations;