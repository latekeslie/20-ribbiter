import userResource from './resources/user';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  users: userResource.reducer,
});

export default reducer;
