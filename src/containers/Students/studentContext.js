import React, { createContext } from 'react';
import useTableStudents from './useTableStudents';
import index from './index';

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
        columns
    } = useTableStudents();   
    return (
        <Provider value={{ users, setusers, user, setuser, usersImportList, setusersImportList, columns, rowSelection }}>
        {children}
        </Provider>
    );
};

export { StudentContext, StudentProvider };

