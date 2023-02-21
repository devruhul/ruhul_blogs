import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar bg-gray-900'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52'
          >
            <li>
              <Link to='blogs'>Blogs</Link>
            </li>
            <li>
              <Link to='about'>About</Link>
            </li>
            <li>
              <Link to='contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          Ruhul Blogs
        </Link>
      </div>
      <div className='navbar-end flex justify-evenly items-center'>
        <Link to='/blogs' className='btn'>
          Blogs
        </Link>
        <Link to='/about' className='btn'>
          About
        </Link>
        <Link to='/contact' className='btn'>
          Contact
        </Link>
      </div>
    </div>
  );
}
