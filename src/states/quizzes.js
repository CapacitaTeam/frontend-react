import Quizzes from '../containers/Quizzes';
const states = [
    {
        url:'Quizzes',
        name:'App.Quizzes',
        title:'Quizzes',
        views: {
            main: Quizzes
        },
        data:{
            contentScrollable: false
        }
    }
];
export default states;