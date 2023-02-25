import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../../components/NewsCard";
import { loadingBlogs } from "../../redux/actions/blogActions";
import fetchNewsBlogs from "../../redux/thunk/Blogs/fetchBlogs";

export default function Home() {
  const blogs = useSelector((state) => state.blog.items);
  const loading = useSelector((state) => state.blog.loading);

  const dispatch = useDispatch();
  // fetch news api
  useEffect(() => {
    // dispatch(loadingBlogs());
    // dispatch(fetchNewsBlogs());
  }, []);
  return (
    <div className='bg-gray-900 '>
      <div className='container mx-auto'>
        <div className=' grid grid-cols-3'>
          {loading ? (
            <div className='absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 '>
              <div className='border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-40 w-40 '></div>
            </div>
          ) : (
            blogs.map((article) => (
              <NewsCard key={article.title} article={article} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
