import {ADD_CORRECT_ALPHABET,ADD_INCORRECT_ALPHABET} from './UserAnswerReducer'
export const STATUS_INIT='STATUS_INIT';
export const STATUS_LEVELUP='STATUS_LEVELUP'
export const STATUS_FAIL='STATUS_FAIL'
export const STATUS_PASS='STATUS_PASS'
export default function StatusReducer(status=0,action){
    switch (action.type) {
        case STATUS_INIT:
            return 0;
        case STATUS_LEVELUP:
                return ++status;
        case STATUS_FAIL:
            return 10;
        case STATUS_PASS:
            return 100;
        default:
            return status;
            break;
    }
}