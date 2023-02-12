import {combineReducers}  from 'redux'
import blogReducer from "./blogsReducer";

// setup rootReducer
const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
