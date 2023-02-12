import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const blogs = useSelector(state => state.blog.items)
  const dispatch = useDispatch()
  return (
    <div className='container mx-auto'>
      <h1>Home</h1>
    </div>
  );
}
