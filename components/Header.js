import React from 'react'
import Image from 'next/dist/client/image'
import {FiSearch} from 'react-icons/fi'
import {BsPlusCircle} from 'react-icons/bs'
import {HiHome} from 'react-icons/hi'
import myImag from '../public/11111.jpg'
import {useSession, signIn, signOut} from 'next-auth/react'

const Header = () => {
    const {data: session, status} = useSession();
    console.log(session);

    return (
    <div className='border-b-1 sticky top-0 z-30 bg-white border-gray-300 pt-2 pb-4 shadow-md shadow-gray'>
        <div className='flex justify-between items-center max-w-6xl mx-auto mt-2 '>
                    {/*left */}
            <div className='w-24 h-14 relative hidden lg:grid'>
                <Image src='https://logo-logos.com/2016/10/Instagram_logo_wordmark_logotype.png' alt='instagram' layout='fill'
                className='object-contain ' />
            </div>
            <div className='w-24 h-14 relative lg:hidden grid'>
                <Image src='https://static01.nyt.com/images/2016/05/11/us/12xp-instagram/12xp-instagram-videoSixteenByNineJumbo1600-v2.jpg' alt='instagram' layout='fill'
                className='object-contain ' />
            </div>
            {/*middle */}
            <div className='relative flex' >
                <input className='py-2 px-7 rounded-xl border-1 border-gray-500 shadow-lg shadow-gray-300 focus:border-gray-400 ' type='text' placeholder='search' />
                <FiSearch className='absolute left-2 top-[11px] h-5 text-gray-500 cursor-pointer'/>
            </div>
            {/*right */}
            <div className='flex items-center justify-center pr-2'>
                <HiHome className=' hover:scale-110 ease-in duration-100 mx-4 cursor-pointer' size={25}/>
                <BsPlusCircle className='hover:scale-110 ease-in duration-100 mx-4 cursor-pointer' size={25}/>
                <div className='mx-4 hover:scale-110 ease-in duration-100'>
                    {
                        session?               
                              <img src={ session.user.image} onClick={()=>{signOut({callbackUrl:'/'})}} className=' rounded-full cursor-pointer ' alt='/' width='60px' height='60px'/>   :
                              <button onClick={signIn} >signin</button>                 
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
