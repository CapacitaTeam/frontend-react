import React, { createContext, useEffect  } from 'react';
import { Spin } from 'antd';

import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';


const STUDENTS_LIST_REQUEST = gql`  
    query User {
        users{
            key: id
            username
            status
            createdat
        }
    }`;

let StudentContext;
let { Provider } = (StudentContext = createContext());

const StudentProvider = ({ children }) => {
    const { loading, error, refetch, data, networkStatus } = useQuery(STUDENTS_LIST_REQUEST, { notifyOnNetworkStatusChange: true });
    useEffect(() => {
        refetch();
      }, [])
  
    if (loading || networkStatus === NetworkStatus.refetch) return <div className="contains-spin"><Spin /></div>;
    if (error) return <p>Error :(</p>;

   
    return (
        <Provider value={{ users: data.users }}>
        {children}
        </Provider>
    );
};

export { StudentContext, StudentProvider };

