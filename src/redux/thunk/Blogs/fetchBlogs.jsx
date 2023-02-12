import { ERROR, FETCH_BLOGS, LOADING } from "../../actionTypes/actionTypes";

// fetch the blogs using thunk
const fetchNewsBlogs = () => {
  return async (dispatch) => {
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=developer&apiKey=b8f95936cdd54301b690ae5b88569397"
    );
    const data = await res.json();
    console.log(data);
    if (data.status === "ok") {
      dispatch({
        type: FETCH_BLOGS,
        payload: data.articles,
      });
    } else {
      dispatch({
        type: ERROR,
      });
    }
  };
};

export default fetchNewsBlogs;
