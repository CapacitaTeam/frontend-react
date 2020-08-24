// helpers
import find from 'lodash/find';
/* views */
import Init from '../containers/Init';
//import Login from '../containers/Init/Login';
import dashboard from './dashboard';
import courses from './courses';
import createCourse from './createCourse';

import authService from '../authService';
const states = [
    // Root App
    {
        url: '/',
        name: 'App',
        component: Init,
        title: '',
        params: {
            view: {
                value: (authService.isAuthenticated())?null:'Login',
                inherit: false
            }
        },
        redirectTo: trans => {
            const $state = trans.router.stateService;
            const toState = trans.to();
            const toParams = trans.params('to');

            if(toState.name === 'App' && !toParams.view){
                const states = ['App.Dashboard','App.Courses','App.CreateCourse'];
                return find(states, state => $state.target(state).exists());
            }else{
                return null;
            }
        },
        data:{
            only: 'hasPermissions',
            except:'anonymous',
            redirectTo:{
                anonymous:{
                    state:'App',
                    params:{
                        view:'Login'
                    }
                },
                hasPermissions:{
                    state:'App',
                    params:{
                        view:'PermissionNotFound'
                    }
                }
            }
        }
    },
    ...dashboard,
    ...courses,
    ...createCourse
];

export default states;