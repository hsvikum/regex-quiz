import {PREVIOUS_QUIZ, NEXT_QUIZ} from '../actions/actionTypes';

const initState = {
    quizes: [
        {
            "index": 0,
            "description": "Start Of A Pattern",
            "body": "^ symbol marks the start of a pattern",
            "answer": "",
            "solved": false,
            "challenges": [
                {
                    "problem": "Who let the dogs out ?",
                    "solution": ["Who"]
                },
                {
                    "problem": "Who is batman ?",
                    "solution": ["Who"]
                }
            ]
        },
        //   {
        //     "id": 2,
        //     "title": "qui est esse",
        //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        //   },
        //   {
        //     "id": 3,
        //     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        //     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        //   }
    ],
    currentQuiz: null
}

const quizesReducer = (state = initState, action) => {
    switch(action.type) {
        case NEXT_QUIZ:
            if (!state.currentQuiz) {
                return {
                    ...state,
                    currentQuiz: state.quizes[0]
                };
            } else {
                let nextIndex = state.currentQuiz.index + 1;
                if (nextIndex <= state.quizes.length) {
                    let selectedQuiz = state.quizes[nextIndex]
                    return {
                        ...state,
                        currentQuiz: selectedQuiz
                    };
                } else {
                    return state;
                }
            }
        case PREVIOUS_QUIZ:
            if (!state.currentQuiz) {
                return {
                    ...state,
                    currentQuiz: state.quizes[0]
                };
            } else {
                let previousIndex = state.currentQuiz.index - 1;
                if (previousIndex >= 0) {
                    let selectedQuiz = state.quizes[previousIndex]
                    return {
                        ...state,
                        currentQuiz: selectedQuiz
                    };
                } else {
                    return state;
                }
            }
        default:
          return state;
    }
}

export default quizesReducer;