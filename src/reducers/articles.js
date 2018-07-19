import { ADD_ARTICLE } from "../constants";

 const articles = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            let article = {
                title:action.title,
                author:action.author,
                content:action.content
            }
            return [
                ...state,
                article
            ]
        default:
            return state
    }
}
export default article;