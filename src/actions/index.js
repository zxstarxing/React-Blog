import {ADD_ARTICLE} from '../constants';
import {axios_add_article} from '../utils/ArticlesAPI';

export const add_article = (title,author,content) => ({
    type:ADD_ARTICLE,
    payload:axios_add_article({title,author,content})
})
