import React from 'react'
import Image from 'next/image'
import {getProviders, signIn} from 'next-auth/react'
import Header from '../../components/Header'
const signin = ({providers}) => {
  return (
    <div >
      <Header/>
      <div className='flex items-center justify-center space-x-3 mt-16' >
        <div >
            <Image src={'https://mobilemonkey.com/wp-content/uploads/2021/06/img-fold_instachamp_2x.png'} width={200} height={200} className='mx-auto' />
        </div>

        <div className='flex flex-col justify-center space-y-12'>
            <Image src='https://static01.nyt.com/images/2016/05/11/us/12xp-instagram/12xp-instagram-videoSixteenByNineJumbo1600-v2.jpg' alt='instagram' width={100} height={100}
            className='object-contain '/>
            {
                Object.values(providers).map(provider=>(
                    <div>
                        <Image src='https://logo-logos.com/2016/10/Instagram_logo_wordmark_logotype.png' alt='instagram' width={350} height={50}
                        className='object-contain ' />
                        <div className='flex flex-col justify-center items-center'>
                        <p>This app is created for learning purposes</p>
                        <button onClick={()=>{
                            signIn(provider.id,{callbackUrl: '/'})
                        }} className='w-min-width my-4 bg-red-400 hover:bg-red-500 ease-out duration-100 text-white p-3 font-bold rounded-md'>
                        Sign in with Google
                        </button>
        
                        </div>
                    </div>
                ))
            }
        </div>

      </div>
    </div>
  )
}

export default signin
 
export async function getServerSideProps(contex){
    const providers =await getProviders();
    return {
        props : {providers}
    }
}