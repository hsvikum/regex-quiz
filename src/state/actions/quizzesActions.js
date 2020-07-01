import {PREVIOUS_QUIZ, NEXT_QUIZ} from './actionTypes';

export const nextQuiz = (quiz) => {
    return {
        type: NEXT_QUIZ,
        payload: quiz
    }
}


export const previousQuiz = (quiz) => {
    return {
        type: PREVIOUS_QUIZ,
        payload: quiz
    }
}