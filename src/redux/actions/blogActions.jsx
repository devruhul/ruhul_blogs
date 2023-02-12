import { ERROR, FETCH_BLOGS, LOADING } from "../actionTypes/actionTypes";

export const fetchBlogs = (data) => {
  return {
    type: FETCH_BLOGS,
    payload: data,
  };
};

export const loadingBlogs = () => {
  return {
    type: LOADING,
  };
};

export const errorBlogs = () => {
  return {
    type: ERROR,
  };
};
