import Image from 'next/dist/client/image'

const MiniProfile = () => {

  return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center'>
            <img className='w-16 h-16 border-gray-400 border-2 rounded-full p-[.5px]  ' src='https://d1e00ek4ebabms.cloudfront.net/production/5005a9ab-f4b4-4953-9985-d5ff8dcadebb.jpg' alt='profie' />
            </div>
            <div className='px-3 flex flex-col justify-start items-start'>
                <h3 className='font-semibold text-lg'>Peter Safwat</h3>
                <p className='text-sm text-gray-500 '> Welcome to instagram</p>
            </div>
            <div className=' px-1 flex items-end justify-end'>
                <button className='text-blue-400 text-lg '>
                    sign out
                </button>
            </div>
        </div>
  )
}

export default MiniProfile
