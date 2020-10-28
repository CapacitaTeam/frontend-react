import { gql } from 'apollo-boost';

const CREATE_QUESTION_QUIZ = gql`  
mutation CreateQuestionQuiz ($id: Int, $question: String!, $a: String!, $b: String!, $c: String!, $d: String!, $correct_answer: String!, $clue: String, $img: String, $video: String, $status: Boolean) {
    createQuestionQuiz(id: $id, question: $question, a: $a, b: $b, c: $c, d: $d, correct_answer: $correct_answer, clue: $clue, img: $img, video: $video, status: $status){
    id
    question
  }
}`;

export default CREATE_QUESTION_QUIZ;