import React, { useContext, useEffect  } from 'react'
import {Table, Spin} from 'antd';

import { StudentContext } from '../studentContext';
import { gql, NetworkStatus } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


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

const TableStudents = (_) => {
    const { loading, error, refetch, data, networkStatus } = useQuery(STUDENTS_LIST_REQUEST, { notifyOnNetworkStatusChange: true });
    let {  
        users,
        setusers,
        rowSelection,
        columns } = useContext(StudentContext);

    useEffect(() => {
        refetch();
    }, [])

    if (loading || networkStatus === NetworkStatus.refetch) return <div className="contains-spin"><Spin /></div>;
    if (error) return <p>Error :(</p>;
    if (!data || !data.users) return <p>Vacio :(</p>; 


    if(!users)
      setusers(data.users);
    
        return       <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={users}
                    />
  
  }

    
  export default TableStudents;






