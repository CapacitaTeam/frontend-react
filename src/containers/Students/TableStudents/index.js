import React, { useContext, useEffect  } from 'react'
import {Table, Spin} from 'antd';

import { StudentContext } from '../studentContext';
import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


const STUDENTS_LIST_REQUEST = gql`  
    query User {
        users{
            key: id
            username
            status
            createdat
        }
    }`;

const TableStudents = (_) => {
    const { loading, error, refetch, data, networkStatus } = useQuery(STUDENTS_LIST_REQUEST, { notifyOnNetworkStatusChange: true });
    let {  
        usersDataSources,
        setusersDataSources,
        rowSelection,
        columns } = useContext(StudentContext);

    useEffect(() => {
        refetch();
    }, [])

    if (loading || networkStatus === NetworkStatus.refetch) return <div className="contains-spin"><Spin /></div>;
    if (error) return <p>Error :(</p>;
    if (!data || !data.users) return <p>Vacio :(</p>; 

    if(!usersDataSources)
      setusersDataSources(data.users);
    
        return       <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={usersDataSources}
                    />
  
  }

    
  export default TableStudents;






