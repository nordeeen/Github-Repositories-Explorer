import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

// const titleDrop = [
//   {
//     id: 1,
//     title: 'Exampleuser 1',
//     count: 12,
//   },
//   {
//     id: 2,
//     title: 'Exampleuser 431',
//     count: 48,
//   },
//   {
//     id: 3,
//     title: 'Exampleuser 55655',
//     count: 23,
//   },
// ];

const UserDropdown = () => {
  const [items, setItems] = useState([]);
  const [user] = useState('mojombo');

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
      );
      const data = await res.json();
      setItems(data);
      console.log(data);
    } catch (err) {
      console.error('Error :', err);
    }
  };

  useEffect(() => {
    fetchData(user);
  }, [user]);

  return (
    <>
      <section>
        <div className='relative mt-10 py-5'>
          <div className='mb-10'>
            {/* {titleDrop.map((data) => {
              return (
                <Dropdown key={data.id} title={data.title} count={data.count} />
              );
            })} */}
            {items.map((val, i) => {
              return <Dropdown key={i} {...val} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDropdown;
