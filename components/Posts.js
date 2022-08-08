import React from 'react'
import Image from 'next/dist/client/image'
import {IoEllipsisHorizontal} from 'react-icons/io5'
import {AiOutlineHeart} from 'react-icons/ai'
import {HiOutlineChat} from 'react-icons/hi'
import {HiOutlineEmojiHappy, HiOutlineBookmark} from 'react-icons/hi'
const Posts = () => {
    const usersPosts = [{
        username: 'cris',
        userImg: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltdf427c3900b02c7f/62d6ac40afcfe11066439e0e/imago1013175833h-(1).png",
        image: 'https://images.unsplash.com/photo-1657441964716-82f1bbf51ee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        caption: 'the king',
        id:1
    },
    {
        username: 'messi',
        userImg: "https://www.fcbarcelonanoticias.com/uploads/s1/12/95/80/5/lionel-messi-en-un-entrenamiento.jpeg",
        image: 'https://images.unsplash.com/photo-1657447174762-16111248947d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        caption: 'the Goat',
        id:2
    }
]
  return (
    <div className='my-6'>
      {
        usersPosts.map(post=>(
            <div className='flex flex-col rounded-xl shadow-md shadow-gray-200 my-8 border-gray-200 border-opacity-60'>
                <div className='flex justify-between items-center py-4 px-3 bg-white border '>         
                    <div className='flex items-center justify-start' > 
                        <img className='p-[3px] border border-gray-300 shadow-md shadow-gray-200 w-14 h-14 rounded-full mx-4 ' src={post.userImg} />
                        <p className='text-xl font-semibold' > {post.username}</p>
                    </div>
                    <IoEllipsisHorizontal className='cursor-pointer ' size={15}/>
                </div>
                <div>
                    <img src={post.image} alt='postImg' className='h-auto w-full' />
                </div>
                <div className='flex justify-between items-center bg-white'>
                    <div className='flex justify-start items-center p-2 '>
                        <div className='px-4 hover:scale-110 ease-out duration-150 cursor-pointer'>
                        <AiOutlineHeart  size={30} />
                        </div>
                        <div className='px-4 hover:scale-110 ease-out duration-150 cursor-pointer'>
                        <HiOutlineChat size={30}/>
                        </div>
                    </div>
                    <div className='px-4 hover:scale-110 ease-out duration-150 cursor-pointer'>
                            <HiOutlineBookmark size={30}/>
                    </div>
                    
                </div>
                <div className='px-4 py-4 bg-white '>
                    <p className='font-semibold text-lg'> 0 likes</p>
                    <p><span className='font-semibold text-lg'>{post.username} </span>{post.caption}  </p>
                    <div className='px-4 relative'>
                        <div className='mt-8'>
                            <input type='text' className='w-full border-none focus:ring-0 px-4' placeholder='enter your comment' />
                            <HiOutlineEmojiHappy className='absolute top-[6px] left-[-3px] ' size={30}/>
                            <button className='absolute right-2 top-[6px] text-lg font-semibold text-blue-300 opacity-80'>post</button>
                        </div>
                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Posts;
