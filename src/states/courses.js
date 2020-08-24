import Courses from '../containers/Courses';
const states = [
    {
        url:'Courses',
        name:'App.Courses',
        title:'Cursos',
        views: {
            main: Courses
        },
        data:{
            contentScrollable: false
        }
    }
];
export default states;