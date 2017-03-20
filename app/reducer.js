import userResource from './resources/user';
import { combineReducers } from 'redux';
import postResource from './resources/post';

const reducer = combineReducers({
  users: userResource.reducer,
  posts: postResource.reducer,
});

export default reducer;
