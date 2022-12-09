import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { findUsers, getUserRepo, setChangeVal } from '../store/reducers';
import UserDropdown from './UserDropdown';

const Form = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(findUsers(username));
    dispatch(getUserRepo(username));
    dispatch(
      setChangeVal({
        key: 'show',
        value: true,
      })
    );

    console.log('ini data nama:', username);
    setShow(true);
  };

  return (
    <>
      <main className='w-full h-full flex justify-center items-center my-5'>
        <section className='w-[400px] h-[500px] bg-gray-100 px-4 py-4 rounded-sm'>
          <form onSubmit={handleSubmit}>
            <input
              className='bg-gray-300 w-full h-8 outline-none rounded-sm mb-4'
              type='text'
              name='username'
              value={username}
              placeholder=' Enter Username '
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              className='bg-blue-500 text-center text-sm text-white text-normal w-full py-2 rounded-sm'
              type='submit'
            >
              Search
            </button>
          </form>
          {show && <p>Showing user for "{username}"</p>}
          <UserDropdown />
        </section>
      </main>
    </>
  );
};

export default Form;
