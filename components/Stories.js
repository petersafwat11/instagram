import minifaker from 'minifaker'
import React,{useEffect, useState} from 'react'
import 'minifaker/locales/en' 
import Image from 'next/dist/client/image'

 const Stories = () => {
    const[storyUsers, setStoryUser] = useState([]);
    useEffect(()=>{
        const storyUsers = minifaker.array(20,(i)=>(
            {
                username: minifaker.username({locale:'en'}).toLowerCase() ,
                img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)+1}`,
                id:i,
            }
        ))
        setStoryUser(storyUsers);
        console.log(storyUsers);
    },[])
  return (
    <div className='w-full h-22 bg-white p-4 border-gray-400 shadow-md shadow-gray-300'>
        <div className='flex justify-around items-center overflow-x-scroll scrollbar-none p-4 '>
        {
            storyUsers.map(story=>(
                <div key={story.id} className=' cursor-pointer mx-1 hover:scale-110 ease-in duration-100 w-[65px]'>
                    <img className='rounded-full p-[1.5px] border-2 border-red-300 ' src={story.img} width='50px' height='50px'/>
                     <p className='text-sm truncate'>{story.username}</p>
                </div>    
            ))
        }
        </div>
    </div>
  )
}
export default Stories;
