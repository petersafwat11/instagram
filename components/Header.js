import React from 'react'
import Image from 'next/dist/client/image'
import {FiSearch} from 'react-icons/fi'
import {BsPlusCircle} from 'react-icons/bs'
import {HiHome} from 'react-icons/hi'
import myImag from '../public/11111.jpg'

const Header = () => {
  return (
    <div className='border-b-1 sticky left-0 top-0 z-30 bg-white border-gray-300 pt-2 pb-4 shadow-lg shadow-gray'>
        <div className='flex justify-between items-center max-w-6xl mx-auto  '>
                    {/*left */}
            <div className='w-24 h-24 relative hidden lg:grid'>
                <Image src='https://logo-logos.com/2016/10/Instagram_logo_wordmark_logotype.png' alt='instagram' layout='fill'
                className='object-contain ' />
            </div>
            <div className='w-24 h-24 relative lg:hidden grid'>
                <Image src='https://static01.nyt.com/images/2016/05/11/us/12xp-instagram/12xp-instagram-videoSixteenByNineJumbo1600-v2.jpg' alt='instagram' layout='fill'
                className='object-contain ' />
            </div>
            {/*middle */}
            <div className='relative flex' >
                <input className='py-2 px-7 rounded-xl border-1 border-gray-500 shadow-lg shadow-gray-300 focus:border-gray-400 ' type='text' placeholder='search' />
                <FiSearch className='absolute left-2 top-[11px] h-5 text-gray-500 cursor-pointer'/>
            </div>
            {/*right */}
            <div className='flex items-center justify-center '>
                <HiHome className=' hover:scale-110 ease-in duration-100 mx-4 cursor-pointer' size={35}/>
                <BsPlusCircle className='hover:scale-110 ease-in duration-100 mx-4 cursor-pointer' size={35}/>
                <div className='mx-4 hover:scale-110 ease-in duration-100'>
                    <Image className=' rounded-full cursor-pointer ' src={myImag} alt='/' width='60px' height='60px'/>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
