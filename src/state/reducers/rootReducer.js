import { combineReducers } from 'redux'
import quizzesReducer from './quizzesReducer'

export default combineReducers({
    quizzes: quizzesReducer
})