import React, { useState, useEffect } from 'react';
import { getUsers } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import Star from '../assets/star.png';
import { format } from 'date-fns';

const UserDropdown = () => {
  const [repoShow, setRepoShows] = useState(false);

  const dispatch = useDispatch();
  const { values, findUser, show, repoUser } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <section>
        <div className='relative mt-10 py-5'>
          <div className='mb-10 bg-white'>
            {show && (
              <details
                onClick={() => setRepoShows(true)}
                className='open:ring-1 open:h-28 open:ring-black/5 p-6 rounded-lg transform-gpu delay-75 duration-100 ease-in-out'
              >
                <summary className='leading-6  open:shadow-lg border  text-slate-900 dark:text-white font-semibold select-none'>
                  {findUser?.login}
                </summary>
                {repoShow &&
                  repoUser?.map((item, i) => {
                    return (
                      <div className='mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400'>
                        {/* dropdwon */}
                        <div
                          key={i}
                          className='w-full h-auto bg-gray-400 rounded-md px-4 py-4'
                        >
                          <div className='flex justify-between items-center'>
                            <h2 className='text-lg font-medium text-left text-white'>
                              {item.name}
                            </h2>

                            <div className='flex'>
                              <p className='text-white text-xs mr-2'>
                                {item.stargazers_count}
                              </p>
                              <img
                                src={Star}
                                alt='logo-star'
                                className='w-[16px] h-[16px] object-contain'
                              />
                            </div>
                          </div>

                          <p className='text-white mt-4 text-base text-left font-normal'>
                            {item.description}
                          </p>
                          <p className='text-black mt-4 text-base text-left font-semibold'>
                            {item.language}
                          </p>

                          <div className='bg-black w-[80px] h-[40px] px-1 py-1 rounded-full text-center text-white mt-2'>
                            {item.visibility}
                          </div>

                          <p className='text-white mt-4 text-base text-left font-normal'>
                            This repository was created on
                            <div className='text-black'>
                              {format(
                                new Date(`${item.created_at}`),
                                'dd MMMM yyy'
                              )}
                            </div>
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </details>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDropdown;
