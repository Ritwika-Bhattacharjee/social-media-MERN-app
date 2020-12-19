import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

export default (posts = [], action) => {
    switch(action.type) {
        case DELETE:
            return posts.filter((post) => post._id != action.payload); //here action.payload is the id of the deleted post and not the deleted post itself
        case UPDATE:
        case LIKE:
            return posts.map((post) => post._id == action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}