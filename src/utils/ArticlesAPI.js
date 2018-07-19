import axios from 'axios';
export default axios_add_article = ({title,author,content})=>axios.post('/aticle/add', {title,author,content});