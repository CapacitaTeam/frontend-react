import React from 'react';
import { Helmet } from 'react-helmet';
import { UIView } from '@uirouter/react';
// views
import Login from './Login/index';
// layout
import MainLayout from '../../layouts';

import authService from '../../authService';

class Init extends React.Component {

    render() {
        //const view = (authService.isAuthenticated()) ? this.props.transition.params().view : 'Login';
        const view = 'Test';
       
        switch (view){
            case 'Login':
                //window.location.replace('/');
                return (
                    <div>
                        <Helmet>
                            <title>CapacitaTech | Login</title>
                        </Helmet>
                        <Login />
                    </div>
                );

            case 'PermissionNotFound':
                return (
                    <div>
                        <Helmet>
                            <title>CapacitaTech | Not Found</title>
                        </Helmet>
                        <h1>Not found</h1>
                    </div>
                );

            case 'Logout':
                authService.logout()
                window.location.replace('/');
                return <div/>;

            default:
                
                return (
                    <MainLayout >
                        <UIView name='main'/>
                    </MainLayout>
                );
        }
    }
}

export default Init;