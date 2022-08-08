import minifaker from 'minifaker'
import React,{useEffect, useState} from 'react'
import 'minifaker/locales/en' 


const Suggestion = () => {
  const[suggestions, setSuggestion] = useState([]);
  useEffect(()=>{
      const suggestionUsers = minifaker.array(5,(i)=>(
          {
              username: minifaker.username({locale:'en'}).toLowerCase() ,
              img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)+1}`,
              jobtitle: minifaker.jobTitle(),
              id:i,
          }
      ))
      setSuggestion(suggestionUsers);
  },[])

  return (
    <div className='py-6'>
        <div className='flex justify-between items-center pb-6'>
            <p className='font-bold text-sm text-gray-400'>Suggestion for you</p>
            <button  className='text-gray-800'>See all</button>
        </div>
        {
            suggestions.map(suggest=>(
                <div key={suggest.id} className='flex justify-between items-center py-1 '>
                    <div>
                        <img className='rounded-full p-[1.5px] border border-gray-300 ' src={suggest.img} width='50px' height='50px'/>
                    </div>
                    <div className='ovarflow-hidden flex flex-col justify-start items-start w-[60%]'>
                        <h3 className=''>{suggest.username}</h3>
                        <p className='text-xs text-gray-400 trancate '>{suggest.jobtitle}</p>
                    </div>
                    <div>
                        <button className='text-blue-400 text-lg '>
                            follow
                        </button>
                    </div>
                </div>    
            ))
        }
    </div>
  )
}

export default Suggestion
