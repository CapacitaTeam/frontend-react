import ImportStudent from '../containers/ImportStudent';
const states = [
    {
        url:'ImportStudent',
        name:'App.ImportStudent',
        title:'Crear Quiz',
        views: {
            main: ImportStudent
        },
        data:{
            contentScrollable: false
        }
    }
];
export default states;