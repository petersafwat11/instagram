import Image from 'next/dist/client/image'
import { useSession, signOut } from 'next-auth/react'

const MiniProfile = () => {
    const {data: session, status} = useSession();
  return (
    
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center'>
            <img src={session.user.image} className='w-16 h-16 border-gray-400 border-2 rounded-full p-[.5px] ' alt='profie' />
            </div>
            <div className='px-3 flex flex-col justify-start items-start'>
                <h3 className='font-semibold text-lg'>{session.user.name}</h3>
                <p className='text-sm text-gray-500 '> Welcome to instagram</p>
            </div>
            
            <div className=' px-1 flex items-end justify-end'>
                <button onClick={()=>{signOut({callbakUrl:'/'})}} className='text-blue-400 text-lg '>
                    sign out
                </button>
            </div>
        </div>
  )
}

export default MiniProfile
