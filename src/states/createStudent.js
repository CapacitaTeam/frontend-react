import CreateStudent from '../containers/CreateStudent';
const states = [
    {
        url:'CreateStudent',
        name:'App.CreateStudent',
        title:'Crear Estudiante',
        views: {
            main: CreateStudent
        },
        data:{
            contentScrollable: false
        }
    }
];
export default states;