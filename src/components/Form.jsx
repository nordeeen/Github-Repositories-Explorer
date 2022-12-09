import React, { useState, useEffect } from 'react';
import UserDropdown from './UserDropdown';
// import axios from 'axios';

const Form = () => {
  const [show, setShow] = useState(false);
  // const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [user] = useState('florinpop');
  // const [searchInput, setSearchInput] = useState('');
  // const [dataApi, setDataApi] = useState([]);
  // const [filteredResults, setFilteredResults] = useState([]);

  // const singleUser = `https://api.github.com/users/SankThomas`
  // const repos = `https://api.github.com/users/sankthomas/repos?per_page=5`
  // https://api.github.com/users/sankthomas/repos?page=1&per_page=10&sort=updated

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if (searchInput !== '') {
  //     const filteredData = dataApi.filter((item) => {
  //       return Object.values(item)
  //         .join('')
  //         .toLowerCase()
  //         .includes(searchInput.toLowerCase());
  //     });
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(dataApi);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {show && (
            <h3 className='mt-3 text-left font-normal text-xl'>
              Showing users for {`"${username}"`}
            </h3>
          )}

          <UserDropdown />
          {/* <h1>viewing {user}'s repositories</h1> */}
          {/* {!data ? (
            <p>Loading ...</p>
          ) : (
            <div>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    {item.owner.login}
                    <img
                      src={item.owner.avatar_url}
                      alt='logo'
                      style={{ width: '80px', height: '80px' }}
                    />
                  </div>
                );
              })}
            </div>
          )} */}
        </section>
      </main>
    </>
  );
};

export default Form;
