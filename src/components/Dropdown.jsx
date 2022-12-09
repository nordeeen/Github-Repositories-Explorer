import React, { useState } from 'react';
// import ListDropdown from './ListDropdown';
import star from '../assets/star.png';
import { format } from 'date-fns';

const Dropdown = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prevState) => !prevState);
    console.log('succes click');
  };

  // group
  return (
    <>
      <section>
        <button
          className='relative py-2 w-full flex justify-start items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group'
          onClick={handleShow}
        >
          <p className='px-4'>{props.owner.login}</p>
          <span className='border-l p-2  absolute right-6'>
            <svg
              className='ml-2 w-4 h-4'
              aria-hidden='true'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </span>

          {/* card dropdown */}
          {/* 44 hidden */}
          {show && (
            <div className='absolute top-full hidden w-full bg-white shadow-md mt-1 rounded group-focus:block my-3'>
              {/* <ul className='text-left border rounded bg-[red]'>
                <li className='px-4 py-1 hover:bg-gray-100 border-b flex justify-end'>
                  <div className='w-[300px] h-[100px] bg-gray-300 text-left font-normal text-xs px-2 py-2'>
                    <div className='flex justify-between items-center'>
                      <h4>Repositori Title</h4>
                      <div className='flex px-3'>
                        <p className='text-xs font-bold text-right mr-2'>
                          {count}
                        </p>
                        <img
                          src={star}
                          alt='logo-star'
                          className='w-[16px] h-[16px] object-cover'
                        />
                      </div>
                    </div>
                    <p>Repositori Description</p>
                  </div>
                </li>
              </ul> */}
              {/* <ListDropdown name={props.owner.login} count={props.owner.id} /> */}
              <ul className='text-left border rounded bg-[red] relative z-10'>
                <li className='px-4 py-1 hover:bg-gray-100 border-b flex justify-end'>
                  <div className='w-[300px] h-[150px] bg-gray-300 text-left font-normal text-xs px-2 py-2'>
                    <div className='flex justify-between items-center'>
                      <h4>{props.full_name}</h4>
                      <div className='flex px-3'>
                        <p className='text-xs font-bold text-right mr-2'>
                          {props.stargazers_count}
                        </p>
                        <img
                          src={star}
                          alt='logo-star'
                          className='w-[16px] h-[16px] object-cover'
                        />
                      </div>
                    </div>
                    <p>{props.description}</p>
                    <p>status : {props.visibility}</p>
                    <p>fork : {props.forks}</p>
                    <p>language : {props.language}</p>
                    <p>branch : {props.default_branch}</p>
                    <p>
                      This repository was created on :{' '}
                      {format(new Date(props.created_at), 'dd MMMM yyyy')}
                    </p>
                    <p>
                      This repository was updated on :{' '}
                      {format(new Date(props.updated_at), 'dd MMMM yyyy')}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </button>
      </section>
    </>
  );
};

export default Dropdown;
