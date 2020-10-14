import React, { createContext } from 'react';
import useTableStudents from './useTableStudents';
import index from './index';

let StudentContext;
let { Provider } = (StudentContext = createContext());

const StudentProvider = ({ children }) => {        
    let {  
        usersDataSources,
        setusersDataSources,
        editUser,
        rowSelection,       
        columns
    } = useTableStudents();   
    return (
        <Provider value={{ usersDataSources, setusersDataSources, editUser, columns, rowSelection }}>
        {children}
        </Provider>
    );
};

export { StudentContext, StudentProvider };

