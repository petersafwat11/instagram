import React from 'react';
import  Stories  from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestion from './Suggestion';
import { useSession } from 'next-auth/react';
const Feed = () => {
   const {data : session, status} = useSession();
  return (
    <div className='bg-gray-50 py-4 '>
      {/*left */}
      <div className={`max-w-[1240px]  ${session ? 'grid md:grid-cols-3 gap-4 lg:max-w-6xl': 'grid md:grid-cols-2 gap-4 lg:max-w-4xl'}  mx-auto lg:gap-8'`}>
        <div className='md:col-span-2'>
          <Stories/>
          <Posts/>
        </div>
        {/*right */}
        {
          session? 
          <div className='w-full'>
          <div className='fixed py-6 pl-8'>
          <MiniProfile/>
          <Suggestion/>
          </div>
        </div>: ''

        }
      </div>
    </div>
  )
}

export default Feed
