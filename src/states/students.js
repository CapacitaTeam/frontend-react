import Students from '../containers/Students';
const states = [
    {
        url:'Students',
        name:'App.Students',
        title:'Students',
        views: {
            main: Students
        },
        data:{
            contentScrollable: false
        }
    }
];
export default states;