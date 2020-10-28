import DoQuiz from '../containers/DoQuiz';
const states = [
    {
        url:'DoQuiz',
        name:'App.DoQuiz',
        title:'Do Quiz',
        views: {
            main: DoQuiz
        },
        data:{
            contentScrollable: false
        }
    }
];
export default states;