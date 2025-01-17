import * as types from '../constants/actionTypes.js';

const initialState = {
  currentUserID: null,
  userInViewID: null,
  isBrowsing: false,
  userMovieArray: [],
  userFriendsList: [],
};

const listReducer = (state = initialState, action) => {
  console.log('at list reducer');
  switch (action.type) {
    case types.FETCH_USER_MOVIE_LIST_SUCCESS: {
      console.log('at fetch user movie list success switch case');
      const userMovieArray = action.payload.arrMediaObj;
      return {
        ...state,
        userMovieArray,
      };
    }
    default: {
      console.log('returning default state');
      console.log(state);
      return state;
    }
  }
};
export default listReducer;
