import React from "react";
import { Link, Outlet } from "react-router-dom";
import AddProduct from "../../pages/Dashboard/components/AddProduct";

export default function Sidebar() {
  return (
    <div>
      <div className='w-full navbar bg-base-300'>
        <div className='flex-none lg:hidden'>
          <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </label>
        </div>
        <Link to='/' className='flex-1 px-2 mx-2'>
          Ruhul Blogs
        </Link>
        <div className='flex-none hidden lg:block'>
          <ul className='menu menu-horizontal'>
            {/* <!-- Navbar menu content here --> */}
            <li>
              <Link to='/dashboard/new-blog'>New Blog</Link>
            </li>
            <li>
              <Link to='/dashboard/update-blog'>Update Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-sidebar'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content'>
          {/* Page content render here*/}
          <Outlet />
        </div>

        <div className='drawer-side'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul className='menu p-4 inline-flex w-60 bg-footer-bg '>
            {/* Sidebar content here */}
            {/* Show and hide menu based on role */}
            <li>
              <Link to='/dashboard/new-blog'>New Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // Dashboard responsive sidebar
  );
}
<div className='drawer'>
  <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
  <div className='drawer-content flex flex-col'>
    {/* <!-- Navbar --> */}
    <div className='w-full navbar bg-base-300'>
      <div className='flex-none lg:hidden'>
        <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
      </div>
      <Link to='/' className='flex-1 px-2 mx-2'>
        Ruhul Blogs
      </Link>
      <div className='flex-none hidden lg:block'>
        <ul className='menu menu-horizontal'>
          {/* <!-- Navbar menu content here --> */}
          <li>
            <Link to='/dashboard/new-blog'>New Blog</Link>
          </li>
          <li>
            <Link to='/dashboard/update-blog'>Update Blog</Link>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    <Outlet />
  </div>
  <div className='drawer-side'>
    <label htmlFor='my-drawer' className='drawer-overlay'></label>
    <ul className='menu p-4 w-80 bg-base-100'>
      {/* <!-- Sidebar content here --> */}
      <li>
        <Link to='/dashboard/new-blog'>New Blog</Link>
      </li>
      <li>
        <Link to='/dashboard/update-blog'>Update Blog</Link>
      </li>
    </ul>
  </div>
</div>;
