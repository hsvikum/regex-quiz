import {PREVIOUS_QUIZ, NEXT_QUIZ} from '../actions/actionTypes';
import quizzes from './quizes.json';
const initState = {
    quizzes: quizzes,
    currentQuiz: 0
}

const quizzesReducer = (state = initState, action) => {
    switch(action.type) {
        case NEXT_QUIZ:
            let nextIndex = state.currentQuiz + 1;
            if (nextIndex <= Object.keys(state.quizzes).length) {
                return {
                    ...state,
                    quizzes : {
                        ...state.quizzes,
                        [state.currentQuiz]: {...action.payload}
                    },
                    currentQuiz: nextIndex
                };
            } else {
                return state;
            }
        case PREVIOUS_QUIZ:
            let previousIndex = state.currentQuiz - 1;
            if (previousIndex >= 0) {
                return {
                    ...state,
                    quizzes : {
                        ...state.quizzes,
                        [state.currentQuiz]: {...action.payload}
                    },
                    currentQuiz: previousIndex
                };
            } else {
                return state;
            }
        default:
          return state;
    }
}

export default quizzesReducer;