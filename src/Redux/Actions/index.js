import { DIFFICULTY_EASY,DIFFICULTY_MEDIUM,DIFFICULTY_HARD } from "../Reducers/DifficultyReducer";
import {ADD_ALPHABET,CLEAR_ANSWER} from '../Reducers/UserAnswerReducer';
import {STATUS_INIT,STATUS_PASS,STATUS_FAIL,STATUS_LEVELUP} from '../Reducers/StatusReducer';
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
export function ChangeDifficultyEasy(){
    const action= { type:DIFFICULTY_EASY}
return action;
}

export function ChangeDifficultyMedium(){
    const action= { type:DIFFICULTY_MEDIUM}
return action;
}

export function ChangeDifficultyHard(){
    const action= { type:DIFFICULTY_HARD}
    return action;
}
export function AddAlphabet(chr){
    console.log(chr);
    const action= { type:ADD_ALPHABET,payload:chr}
return action;
}
export function StatusInit(){
    const action={type:STATUS_INIT}
    return action;
}

export function StatusLevelUp(){
    const action={type:STATUS_LEVELUP}
    return action;
}

export function StatusPass(){
    const action={type:STATUS_PASS}
    return action;
}

export function StatusFail(){
    const action={type:STATUS_FAIL}
    return action;
}
export function ClearAnswer(){
    const action={type:CLEAR_ANSWER}
    return action;
}