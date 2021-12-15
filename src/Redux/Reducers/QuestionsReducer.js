import Questions from '../../Data/Questions.json'
export const FILTER_EASY_QUESTIONS="FILTER_EASY_QUESTIONS";
export const FILTER_MEDIUM_QUESTIONS="FILTER_MEDIUM_QUESTIONS";
export const FILTER_HARD_QUESTIONS="FILTER_HARD_QUESTIONS";

export default function Difficulty(state=Questions,action){
    switch (action.type) {
        case FILTER_EASY_QUESTIONS:
            return Questions.filter(x=>x.difficulty=="easy");
        case FILTER_MEDIUM_QUESTIONS:
            return Questions.filter(x=>x.difficulty=="medium");
        case FILTER_HARD_QUESTIONS:
            return Questions.filter(x=>x.difficulty=="hard");
        default:
            return Questions;
            break;
    }
}
