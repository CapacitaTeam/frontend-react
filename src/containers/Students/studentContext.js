import React, { createContext } from 'react';
import useTableStudents from './useTableStudents';

let StudentContext;
let { Provider } = (StudentContext = createContext());

const StudentProvider = ({ children }) => {        
    let {  
        users,
        setusers,
        user,
        setuser,
        usersImportList, 
        setusersImportList,
        rowSelection,  
        pagination,     
        columns
    } = useTableStudents();   
    return (
        <Provider value={{ users, setusers, user, setuser, usersImportList, setusersImportList, rowSelection, pagination, columns }}>
        {children}
        </Provider>
    );
};

export { StudentContext, StudentProvider };

