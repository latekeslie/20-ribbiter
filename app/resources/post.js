
import createResource from 'redux-thunk-rest';

const postResource = createResource('post', {
  url: 'http://ribbiterapi.herokuapp.com/posts',
});

export default postResource;
