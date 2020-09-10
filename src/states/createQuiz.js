import CreateQuiz from '../containers/CreateQuiz';
const states = [
    {
        url:'CreateQuiz',
        name:'App.CreateQuiz',
        title:'Crear Quiz',
        views: {
            main: CreateQuiz
        },
        data:{
            contentScrollable: false
        }
    }
];
export default states;