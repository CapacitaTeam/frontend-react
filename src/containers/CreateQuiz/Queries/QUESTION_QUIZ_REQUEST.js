import { gql } from 'apollo-boost';

const QUESTION_QUIZ_REQUEST = gql`  
    query QuestionsQuiz {
        questionsQuiz{
            id
            question
            correct_answer
            a
            b
            c
            d
        }
    }`;

export default  QUESTION_QUIZ_REQUEST;