export const ADD_ALPHABET='ADD_ALPHABET'
export const CLEAR_ANSWER='CLEAR_ANSWER'
export default function UserAnswer(state="",action){
    switch (action.type) {
        case ADD_ALPHABET:
            
            return state+action.payload;
            break;
        case CLEAR_ANSWER:
            return "";
        default:
            return state;
            break;
    }
}