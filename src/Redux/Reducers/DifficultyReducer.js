
export const DIFFICULTY_EASY='DIFFICULTY__EASY';
export const DIFFICULTY_MEDIUM='DIFFICULTY_MEDIUM';
export const DIFFICULTY_HARD='DIFFICULTY_HARD'
export default function Difficulty(state='easy',action){

    switch (action.type) {
        case DIFFICULTY_EASY:
            console.log("easy")
            return 'easy';
            break;
        case DIFFICULTY_MEDIUM:
            console.log("meduim")
            return 'medium';
            break;
        case DIFFICULTY_HARD:
            return 'hard';
            break;
        default:
            return 'easy'
            break;
    }

}