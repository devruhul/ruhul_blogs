// write all the functions that will be used to update the state

import { ERROR, FETCH_BLOGS, LOADING, NEW_BLOG } from "../actionTypes/actionTypes";

const initialState = {
  loading: false,
  error: false,
  items: [],
  item: {},
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case FETCH_BLOGS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case NEW_BLOG:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
