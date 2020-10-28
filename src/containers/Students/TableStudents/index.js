import React, { useContext, useEffect  } from 'react'
//antd Component
import Table from "antd/lib/table";
import Spin from "antd/lib/spin";
//Context
import { StudentContext } from '../studentContext';
//Graphql
import { UserQueries } from '../../../graphql';
import { NetworkStatus } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const { STUDENTS_LIST_REQUEST } = UserQueries;

const TableStudents = (_) => {
    const { loading, error, refetch, data, networkStatus } = useQuery(STUDENTS_LIST_REQUEST, { notifyOnNetworkStatusChange: true });
    let {  
        users,
        setusers,
        rowSelection,
        pagination,
        columns } = useContext(StudentContext);

    if (loading || networkStatus === NetworkStatus.refetch) return <div className="contains-spin"><Spin /></div>;
    if (error) return <p>Error :(</p>;
    if (!data || !data.users) return <p>Vacio :(</p>; 


    if(!users)
      setusers(data.users);
    
        return       <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={users}
                        pagination={pagination}
                    />
  
  }    
  export default TableStudents;






