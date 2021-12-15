import { combineReducers } from "redux";
import Difficulty from './DifficultyReducer'
import Questions from './QuestionsReducer'
import UserAnswer from "./UserAnswerReducer";
import StatusReducer  from "./StatusReducer";

const root=combineReducers({
    Difficulty,Questions,UserAnswer,StatusReducer
})
export  default root;
