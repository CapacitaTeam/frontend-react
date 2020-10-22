import { gql, NetworkStatus } from 'apollo-boost';

const STUDENTS_LIST_REQUEST = gql`  
    query User {
        users{
            key: id
            firstname
            lastname
            username
            status
            createdat
            id_role
        }
    }`;

const STUDENT_REQUEST = gql`  
    query User($id: Int!) {
    user(id: $id){
        key: id
        firstname
        lastname
        username
        status
        createdat
        id_role
    }
}`;


const UserQueries = {
    STUDENTS_LIST_REQUEST,
    STUDENT_REQUEST,
  };
  
  export default UserQueries;