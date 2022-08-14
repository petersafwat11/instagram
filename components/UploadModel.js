import React from 'react'
import Modal from 'react-modal'
import modelState from '../atom/modelState'
import { Snapshot, useRecoilState } from 'recoil'
import {AiOutlineCamera, AiOutlineCloseCircle} from 'react-icons/ai'
import { useRef,useState } from 'react'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import {db, storage } from '../firebase'
import { ref, uploadString } from 'firebase/storage'


const UploadModel = () => {
    const {data: session} = useSession();
    const [loading, setLoading] = useState(true);
    const fileRef= useRef(null);
    const [imgUrl, setImgUrl] = useState(null);
    const captionRef = useRef();
    const [open, setOpen] = useRecoilState(modelState);
    const imgHandeler= (e)=>{
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
            setLoading(false)
        }
        reader.onload = (reader)=>{
            setImgUrl( reader.target.result)
        }
    }
    const postHandeler = async(e)=>{
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'posts'),{
            caption : captionRef.current.value,
            time: serverTimestamp(), 
            userImage: session.user.image,
            username : session.user.username
        } );

        const imgRef=  ref(storage,`posts+${docRef.id}+/images` );
        await uploadString(imgRef, imgUrl, 'data_url').then(()=> async(Snapshot)=>{
            
        })

    }
  return (
    <div className='relative '>
      {open&& 
      <Modal  className='space-y-3 flex flex-col items-center enter justify-start py-4 max-w-lg w-[90%]  max-h-[400px] mx-auto top-[130px] left-[50%] translate-x-[-50%] absolute border-2 border-gray-200 rounded-lg shadow-md bg-white ring-0  '
      onRequestClose={()=>{
        setOpen(false);
        setImgUrl(null);  
    }}
      isOpen={open}>
        {
            imgUrl? (
                <div className='relative w-[90%] '>
                 <img src={imgUrl} className=' w-full max-h-[250px]' />
                <AiOutlineCloseCircle onClick={()=>{setImgUrl(null)} } size={40} className=' cursor-pointer absolute top-2 right-2' />                
                </div>
            ): 
            (
                <>
                <AiOutlineCamera onClick={()=>{fileRef.current.click()}} size={50} className='border border-gray-200 shadow-sm shadow-gray-400 cursor-pointer p-2 bg-red-200 text-red-500 rounded-full' />
                <input onClick={imgHandeler} type='file' hidden ref={fileRef} />
        

                </>
            )
        }
        <input type='text' ref={captionRef}  className='text-center focus:ring-0 border-0 w-[90%] placeholder:center ' placeholder='please enter your caption'/>
        <button onClick={postHandeler} disabled={!imgUrl ||loading } className='w-[90%] bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-md disabled:bg-gray-200  disabled:cursor-not-allowed disabled:hover:bg-gray-200 ' > Upload Post</button>
        </Modal>
      }
      
    </div>
  )
}

export default UploadModel
